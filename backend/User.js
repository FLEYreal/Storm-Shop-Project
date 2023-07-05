
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
     * generates user object from sql output
     * @param {Object} sql_output sql data 
     */
    fromSQL(sql_output) {
        this.registrationDate = new Date(sql_output.registration_date * 1000);
        this.setPasswordEncrypted(sql_output.password);
        this.name = sql_output.name;
        this.uuid = sql_output.uuid;
        this.money = sql_output.money;   
    }
};

/**
 * user module
 */
module.exports = User;