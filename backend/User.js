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
 * user class
 */
class User {
    /**
    * @type {Date}
    * Registration date
    */
    registrationDate;

    /**
    * @type {string}
    * Username
    */
    name;

    /**
    * @type {string}
    * user uuid
    */
    uuid;

    /**
    * @type {string}
    * encrypted password
    */
    #password;

    /**
     * @type {number}
     * money
     */
    money;

    /**
     * @type {string}
     * account type (advertisement, standard)
     */
    type;

    /**
     * @param {string} pass plain password
     */
    #createEncryptedPassword(pass) {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(pass, salt);

        return hash;
    }

    /**
     * @param {string} pass plain password
     */
    setPassword(pass) {
        this.#password = this.#createEncryptedPassword(pass);
    }

    /**
     * @param {string} pass encrypted password
     */
    setPasswordEncrypted(pass) {
        this.#password = pass;
    }

    /**
     * get encrypted password
     * @return {string} encrypted password
     */
    getPassword() {
        return this.#password;
    }

    /**
     * validates password
     * @param {string} pass plain password
     * @return {boolean} is password correct or not
     */
    validatePassword(pass) {
        return bcrypt.compareSync(pass, this.getPassword());
    }

    /**
     * get registration date in unix time
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
 * user module
 */
module.exports = User;