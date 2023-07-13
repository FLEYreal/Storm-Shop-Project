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

const request = require("then-request");

const verifyStringLength = (str = "", min = 3, max = 16) => {
    if ((str.length < min) || (str.length > max)) return false;

    return true;
}

const verifyUserCaptcha = async (reToken = "") => {
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SITE_SECRET}&response=${reToken}`

    var stuff = await request("GET", verifyUrl);

    var data = JSON.parse(stuff.body.toString("utf8"));
    
    if (!data.success) return false;

    if (data.score < 0.5) return false;

    return true;
}

const verifyPassword = (password = "" ) => {
    return verifyStringLength(password, 16, 32);
}

const verifyUsername = (username = "") => {
    const regex_match = /^[A-Za-z0-9_-_]+$/;

    if (!verifyStringLength(username, 3, 32)) return false;

    return regex_match.test(username);
}

const verifyUserInformation = (username = "", password = "", reToken = "") => {
    const regex_match = /^[A-Za-z0-9_-_]+$/;
    
    return verifyStringLength(username, 3, 16) && 
           verifyStringLength(password, 16, 32) &&
           username.match(regex_match) &&
           verifyUserCaptcha(reToken)
    ;
}

module.exports = {
    /**
     * проверить длину строки
     * @param {string} str строка
     * @param {number} min минимальная длина
     * @param {number} max максимальная длина
     * 
     * @return {boolean} была ли проверка успешной или нет
     */
    verifyStringLength: verifyStringLength,

    /**
     * проверить капчу пользователя
     * 
     * @param {string} reToken токен recaptcha
     * @return {boolean} была ли проверка успешной или нет
     */
    verifyUserCaptcha: verifyUserCaptcha,

    /**
     * verify user information
     * @param {string} username username
     * @param {string} password password
     * @param {string} reToken recaptcha token
     * 
     * @return {boolean} if verification was successful or not
     */
    verifyUserInformation: verifyUserInformation,

    verifyPassword: verifyPassword,

    
    verifyUsername: verifyUsername
}