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

require("./config");

const express = require('express');

const app = express();
const PORT = process.env.PORT || '8081'

const versioning = require("./versioning");

const SQLInstance = require("./sql");

const User = require("./User");

const crypto = require("crypto");

const goods = require("./goodlist");

var sql = new SQLInstance();
sql.setCredentials(process.env.SQL_PASSWORD, process.env.SQL_HOST, "nitro", "nitrostorm");
sql.init();

app.use(express.json())

app.post(`${versioning.prefix}/signup`, async (req, res) => {
    const required_params = [["unique_id", "number"], ["username", "string"], ["password", "string"]];

    var i = 0;
    while(i < required_params.length) {
        const param = required_params[i];
        // check if required param exists
        if (!Object.hasOwn(req.body, param[0])) {
            // 400 Bad Request
            res.status(400).json({
                error: `${param[0]} is missing!`,
                success: false
            });

            return;
        }

        const type = eval(`typeof req.body.${param[0]}`)

        if (type != param[1]) {
            // 400 Bad Request
            res.status(400).json({
                error: `${param[0]} is invalid! Expected "${param[1]}", but got "${type}"!`,
                success: false
            });

            return; 
        }

        i++;
    }

    const existing_user = await sql.getUser(req.body.username);
    
    if (existing_user) {
        res.status(409).json({
            error: `user ${req.body.username} is already registered`,
            success: false
        })
        return
    }

    let new_user = new User();

    new_user.name = req.body.username;
    new_user.setPassword(req.body.password);
    new_user.money = 0;
    new_user.registrationDate = new Date();
    new_user.uuid = crypto.randomUUID();

    sql.pushUser(new_user);

    res.status(200).json({
        success: true,
        uuid: new_user.uuid
    });
});

app.get(`${versioning.prefix}/goods`, async (req, res) => {
    res.status(200).json(goods);
})

app.post(`${versioning.prefix}/buy`, async (req, res) => {
    const required_params = [["uuid", "string"], ["good", "string"], ["sumRub", "number"], ["from", "string"]];

    var i = 0;
    while(i < required_params.length) {
        const param = required_params[i];
        // check if required param exists
        if (!Object.hasOwn(req.body, param[0])) {
            // 400 Bad Request
            res.status(400).json({
                error: `${param[0]} is missing!`,
                success: false
            });

            return;
        }

        const type = eval(`typeof req.body.${param[0]}`)

        if (type != param[1]) {
            // 400 Bad Request
            res.status(400).json({
                error: `${param[0]} is invalid! Expected "${param[1]}", but got "${type}"!`,
                success: false
            });

            return; 
        }

        i++;
    }

    let good_exists = false; // да ты задолбал флей // ты мне мешаешь работать

    goods.forEach((good) => {
        if ((good.good == req.body.good) && (good.amount == req.body.sumRub)) {
            good_exists = true;
        }
    })

    if (!good_exists) {
        res.status(404).json({
            error: `Not Found`,
            success: false
        });
        return
    }

    let user = sql.getUserByUUID(req.body.uuid);

    res.status(404).json({
        error: `Not Found`,
        success: false
    });
    return

    // if (user.money <)
})

app.listen(PORT, (e) => {
    if(e) {
        console.error(`error on listening: ${e}`);
        throw e;
    } else {
        console.log(`running on port ${PORT}`);
    }
})
console.log("hello, world!");