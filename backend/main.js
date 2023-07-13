// MADE BY BELLEBOWS DOGGY

/**
 *  Nitro Storm Backend — backend for Storm Shop website.
    Copyright (C) 2023  Sergei Baigerov ( SergeyMC9730 )
    
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// load config file
require("./config");
const versioning = require("./versioning");

// load express js and application
const express = require('express');
const cors = require('cors');

const app = express();

const request = require("request");

// get env data
const PORT = process.env.PORT || '8081'
const FRONT_IP = process.env.FRONTEND_IP || 'http://localhost'
const FRONT_PORT = process.env.PORT_FRONTEND || '80';

// load sql nodes
const SQLInstance = require("./sql");
const User = require("./User");

const crypto = require("crypto");

const tools = require("./tools");

const goods = require("./goodlist")

const userValidation = require("./user_validation.js");

// load request list
const request_list = require("./request_list.json");

// create new sql instance and log in
var sql = new SQLInstance();
sql.setCredentials(process.env.SQL_PASSWORD, process.env.SQL_HOST, "nitro", "nitrostorm");
sql.init();

// middlewares
app.use(express.json())
app.use(cors())

userValidation.verifyUserCaptcha("123");

// main middleware - filtering out requests
app.use((req, res, next) => {
    // check if we are checking for files
    if (req.originalUrl.startsWith("/public")) {
        res.sendFile(`${__dirname}${req.originalUrl}`); // send file
        return;
    }

    // check if method is registered
    if (!Object.keys(request_list).includes(req.method)) {
        res.json({
            error: `unknown method ${req.method}`,
            success: false
        }).status(404);
        return;
    }

    // check if request is registerr
    if (!request_list[req.method].includes(req.originalUrl)) {
        res.json({
            error: `request ${req.method}:${req.originalUrl} not found`,
            success: false
        }).status(404);
        return;
    }

    // check if list of required arguments exists here
    if (!Object.keys(request_list.request_arguments).includes(req.originalUrl)) {
        res.json({
            error: `request ${req.method}:${req.originalUrl} not found`,
            success: false
        }).status(404);
        return;
    }

    // check if they were sent by the client
    const required_params = request_list.request_arguments[req.originalUrl];

    var i = 0;
    while (i < required_params.length) {
        const param = required_params[i];
        // check if required param exists
        if (!Object.hasOwn(req.body, param[0])) {
            // 400 Bad Request
            res.json({
                error: `${param[0]} is missing!`,
                success: false
            }).status(400);

            return;
        }

        const type = eval(`typeof req.body.${param[0]}`)

        if (type != param[1]) {
            var approved = false;
            if (param[1] == "uuid") {
                approved = tools.validateUUID(req.body[param[0]]);
            }

            if (!approved) {
                // 400 Bad Request
                res.json({
                    error: `${param[0]} is invalid! Expected "${param[1]}", but got "${type}"!`,
                    success: false
                }).status(400);

                return;
            }
        }

        i++;
    }

    // everything is good
    next()
})

app.post(`${versioning.prefix}/signup`, async (req, res) => {
    const token = req.body.recaptchaToken;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SITE_SECRET}&response=${token}`

    if (!userValidation.verifyUsername(req.body.username)) {
        res.json({
            success: false,
            error: "Неправильное имя пользователя!"
        }).status(428);

        return;
    }

    if (!userValidation.verifyPassword(req.body.password)) {
        res.json({
            success: false,
            error: "Неправильный пароль!"
        }).status(412);

        return;
    }

    

    if (!(await userValidation.verifyUserCaptcha(token))) {
        res.json({
            success: false,
            error: "Вы не прошли капчу. Попробуйте снова!"
        }).status(406);

        return;
    }

    const existing_user = await sql.getUser(req.body.username);
    // check if user exists
    if (existing_user) {
        res.json({
            error: `Такой пользователь "${req.body.username}" уже был зарегестрирован`,
            success: false
        }).status(409)
        return
    }

    // check new user
    let new_user = new User();

    new_user.name = req.body.username;
    new_user.setPassword(req.body.password);
    new_user.money = 0;
    new_user.registrationDate = new Date();
    new_user.uuid = req.body.uuid;

    sql.pushUser(new_user);

    // send json
    res.json({
        success: true,
    }).status(200);
});

app.get(`${versioning.prefix}/goods`, async (req, res) => {
    res.json(goods).status(200);
})

app.post(`${versioning.prefix}/visitor`, async (req, res) => {

})

app.post(`${versioning.prefix}/action`, async (req, res) => {
    // push action
    sql.pushAction(req.body.name, req.body.value);

    res.json({
        success: true
    }).status(200);
})

app.post(`${versioning.prefix}/buy`, async (req, res) => {
    let good = tools.getGood(req.body.good);

    // check if good exists
    if (!good) {
        res.json({
            error: `good not found`,
            success: false
        }).status(404);
        return
    }

    // check if good data was sent correctly by the client
    if (good.cost != req.body.sumRub) {
        res.json({
            error: `good not found`,
            success: false
        }).status(404);
        return
    }

    // get user
    let user = await sql.getUserByUUID(req.body.uuid);

    // check if user exists or not
    if (!user) {
        res.json({
            error: `invalid user`,
            success: false
        }).status(403);
        return
    }

    // check if he have enough money to process transaction
    if (user.money < req.body.sumRub) {
        let rub1 = "are";
        if ((req.body.sumRub - user.money) == 1) rub1 = "is";

        res.json({
            error: `not enough money to process transaction. ${req.body.sumRub - user.money} ${rub1} required.`,
            success: false
        }).status(402);
        return
    }

    // update user
    user.money -= req.body.sumRub;

    sql.updateUser(user);

    // push log
    sql.pushTransaction(user.uuid, req.body.good, req.body.sumRub, req.body.fro)

    // send status
    res.json({
        success: true
    }).status(200);

    return;
})

// generate uuid
app.get(`${versioning.prefix}/getUUID`, async (req, res) => {
    return res.send(crypto.randomUUID()).status(200);
})

// start the webserver
app.listen(PORT, (e) => {
    if (e) {
        console.error(`error on listening: ${e}`);
        throw e;
    } else {
        console.log(`running on port ${PORT}`);
    }
})