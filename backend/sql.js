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
   
const mysql2 = require("mysql2");

const DatabaseContainer = require("./DatabaseContainer")

const User = require("./User");

const crypto = require("crypto");

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
     * @param {User} user user
     */
    pushUser(user) {
        // INSERT INTO `user` (`a`, `b`, `c`, `d`, `e`) VALUES (NOW(), 's', 'd', 'e', '55') 
        this.#sqlconnection.query(
            `INSERT INTO \`users\` (\`registration_date\`, \`name\`, \`uuid\`, \`password\`, \`money\`) VALUES (${Math.ceil(user.registrationDate.getTime() / 1000)}, ${user.name}, ${user.uuid}, ${user.getPassword()}, ${user.money}) `,
            (err, a, b) => {
                console.log(err, a, b);
            }
        )
    }

    init() {
        this.#sqlconnection = mysql2.createConnection({
            host: this.#host,
            user: this.#user,
            password: this.#password,
            database: this.#database
        });

        this.#sqlconnection.query(
            "DROP TABLE `nitrostrom`.`users`",
            (err, a, b) => {
                console.log(err, a, b);
            }
        );

        this.#sqlconnection.query(
            "CREATE TABLE if not exists `nitrostorm`.`users` (`registration_date` BIGINT NOT NULL , `name` TEXT NOT NULL , `uuid` TEXT NOT NULL , `password` TEXT NOT NULL , `money` INTEGER NOT NULL );",
            (err, a, b) => {
                console.log(err, a, b);
            }
        );
        this.#sqlconnection.query(
            "CREATE TABLE if not exists `nitrostorm`.`goods_report` (`date` BIGINT NOT NULL , `uuid` TEXT NOT NULL , `good_id` INTEGER NOT NULL , `source` INTEGER NOT NULL , `value` INTEGER NOT NULL );",
            (err, a, b) => {
                console.log(err, a, b);
            }
        );

        var usertest = new User();
        usertest.setPassword("123");
        usertest.money = 64;
        usertest.name = "Player";
        usertest.registrationDate = new Date();
        usertest.uuid = crypto.randomUUID();

        this.pushUser(usertest);

        // delete(usertest);
    }

};

module.exports = SQLInstance;