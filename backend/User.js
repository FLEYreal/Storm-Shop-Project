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

const bcrypt = require("bcrypt");

/**
 * класс пользователя
 */
class User {
    /**
    * @type {Date}
    * дата регистрации
    */
    registrationDate;

    /**
    * @type {string}
    * ник пользователя
    */
    name;

    /**
    * @type {string}
    * uuid пользователя
    */
    uuid;

    /**
    * @type {string}
    * зашифрованный пароль
    */
    #password;

    /**
     * @type {number}
     * деньги
     */
    money;

    /**
     * @type {string}
     * тип аккаунта (рекламный, стандартный)
     */
    type;

    /**
     * @param {string} pass незашифрованный пароль
     */
    #createEncryptedPassword(pass) {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(pass, salt);

        return hash;
    }

    /**
     * @param {string} pass незашифрованный пароль
     */
    setPassword(pass) {
        this.#password = this.#createEncryptedPassword(pass);
    }

    /**
     * @param {string} pass зашифрованный паролб
     */
    setPasswordEncrypted(pass) {
        this.#password = pass;
    }

    /**
     * получить зашифрованный пароль
     * @return {string} зашифрованный пароль
     */
    getPassword() {
        return this.#password;
    }

    /**
     * проверяет пароль
     * @param {string} pass исходный пароль
     * @return {boolean} верен пароль или нет
     */
    validatePassword(pass) {
        return bcrypt.compareSync(pass, this.getPassword());
    }

    /**
     * получить дату регистрации во временной марке Unix
     * @return {number} unix timestamp
    */
    getRegDate() {
        return Math.ceil(this.registrationDate.getTime() / 1000)
    }

    /**
     * generates user object from sql output
     * @param {Object} sql_output sql data 
     */
    fromSQL(sql_output) {
        this.registrationDate = new Date(sql_output.registration_date * 1000);
        this.setPasswordEncrypted(sql_output.password);
        this.name = sql_output.name;
        this.uuid = sql_output.uuid;
        this.money = sql_output.money;
        this.type = sql_output.type;
    }
};

/**
 * модуль пользователя
 */
module.exports = User;