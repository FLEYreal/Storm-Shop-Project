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

const mysql2 = require('mysql2/promise');

const DatabaseContainer = require("./DatabaseContainer")

const User = require("./User");

const crypto = require("crypto");

const tools = require("./tools");

class SQLInstance extends DatabaseContainer {
    /**
     * @type {string}
     */
    #password;
    /**
     * @type {string}
     */
    #host;
    /**
     * @type {string}
     */
    #user;
    /**
     * @type {string}
     */
    #database;

    /**
     * @type {@type {mysql2.Connection}}
     */
    #sqlconnection;

    /**
     * set credentials for connecting
     */
    setCredentials(password = "", host = "", user = "", database = "") {
        this.#password = password;
        this.#host = host;
        this.#database = database;
        this.#user = user;
    }

    /**
     * @param {string} username usernafme
     * @return {User | undefined} user
     */
    async getUser(username) { // player
        const [rows] = await this.#sqlconnection.execute(
            `SELECT * FROM users WHERE name = ?`, [username]
        )

        if (rows.length < 1) return undefined;
        
        let user = new User();
        user.fromSQL(rows[0]);

        return user;
    }

    /**
     * @param {string} uuid username
     * @return {User | undefined} user
     */
    async getUserByUUID(uuid) { // player
        const [rows] = await this.#sqlconnection.execute(
            `SELECT * FROM users WHERE uuid = ?`, [uuid]
        )

        if (rows.length < 1) return undefined;
        
        let user = new User();
        user.fromSQL(rows[0]);

        return user;
    }

    /**
     * @param {User} user user
     */
    async pushUser(user) {
        // INSERT INTO `user` (`a`, `b`, `c`, `d`, `e`) VALUES (NOW(), 's', 'd', 'e', '55') 
        this.#sqlconnection.execute(
            `INSERT INTO \`users\` (\`registration_date\`, \`name\`, \`uuid\`, \`password\`, \`money\`) VALUES (?, ?, ?, ?, ?)`, [user.getRegDate(), user.name, user.uuid, user.getPassword(), user.money]
        )
    }

    /**
     * push transaction to the database
     * 
     * @param {string} uuid uuid
     * @param {string} good good
     * @param {number} amount sum rub
     * @param {string} source transaction source
     */
    async pushTransaction(uuid, good, amount, source) {
        const gooddata = tools.getGood(good);

        if (!gooddata) return;

        this.#sqlconnection.execute(
            `INSERT INTO \`goods_report\` (\`date\`, \`uuid\`, \`good_id\`, \`source\`, \`value\`) VALUES (?, ?, ?, ?, ?)`, 
            [
                tools.getUnixTime(), uuid, gooddata.id, source, amount 
            ]
        )
    }

    /**
     * update user
     * @param {User} user user
     */
    async updateUser(user) {
        console.log(user);

        this.#sqlconnection.execute(
            `UPDATE users SET registration_date = ?, name = ?, uuid = ?, password = ?, money = ? WHERE uuid = ?`, 
            [
                user.getRegDate(), user.name, user.uuid, user.getPassword(), user.money, user.uuid
            ]
        )
    }

    async init() {
        this.#sqlconnection = await mysql2.createConnection({
            host: this.#host,
            user: this.#user,
            password: this.#password,
            database: this.#database
        });

        this.#sqlconnection.execute(
            "CREATE TABLE if not exists `nitrostorm`.`users` (`registration_date` BIGINT NOT NULL , `name` TEXT NOT NULL , `uuid` TEXT NOT NULL , `password` TEXT NOT NULL , `money` INTEGER NOT NULL );"
        );
        this.#sqlconnection.execute(
            "CREATE TABLE if not exists `nitrostorm`.`goods_report` (`date` BIGINT NOT NULL , `uuid` TEXT NOT NULL , `good_id` enum('NitroFull1M', 'NitroBasic1M', 'NitroFull1Y', 'NitroFullGift', 'Boost1', 'BoostLevel3', 'ActiveDev') NOT NULL , `source` enum('TG', 'WEB', 'DC') NOT NULL , `value` INTEGER NOT NULL );"
        );
        this.#sqlconnection.execute(
            "CREATE TABLE if not exists `nitrostorm`.`action_list` (`action` TEXT NOT NULL , `amount` INTEGER NOT NULL );"
        );
        this.#sqlconnection.execute(
            "CREATE TABLE if not exists `nitrostorm`.`user_db` (`login_unixdate` BIGINT NOT NULL , `uuid` TEXT NOT NULL , `login_amount` INTEGER NOT NULL , `inviter` TEXT NOT NULL );"
        );

        // var usertest = new User();
        // usertest.setPassword("123");
        // usertest.money = 64;
        // usertest.name = "Player";
        // usertest.registrationDate = new Date();
        // usertest.uuid = crypto.randomUUID();

        // this.pushUser(usertest);

        // delete(usertest);
    }

    /**
     * add new action to the database
     * 
     * @param {string} name name
     */
    async pushAction(name) {
        const [rows] = await this.#sqlconnection.execute(`SELECT 1 FROM action_list WHERE action = ?`, [name])

        if (rows.length < 1) {
            this.#sqlconnection.execute(
                `INSERT INTO \`action_list\` (\`action\`, \`amount\`) VALUES (?, ?)`, [name, 1]
            )
        } else {
            this.#sqlconnection.execute(
                `UPDATE action_list SET amount = amount + 1 WHERE action = ?`, [name]
            )
        }
    }

};

module.exports = SQLInstance;