
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
     * @param {string} pass unencrypted password
     */
    #createEncryptedPassword(pass) {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(pass, salt);

        return hash;
    }

    /**
     * @param {string} pass unencrypted password
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
};

/**
 * user module
 */
module.exports = User;