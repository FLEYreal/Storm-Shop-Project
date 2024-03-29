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

const User = require("./User");

class DatabaseContainer {
    /**
     * получить пользователя по имени
     * 
     * @param {string} username username
     * @return {User | undefined} user
     */
    async getUser(username) {}

    /**
     * получить пользователя по uuid
     * 
     * @param {string} username uuid
     * @return {User | undefined} user
     */
    async getUserByUUID(uuid) {}

    /**
     * добавить нового пользователя в БД
     * 
     * @param {User} user user
     */
    async pushUser(user) {}

    /**
     * обновить пользователя
     * @param {User} user user
     */
    async updateUser(user) {}

    /**
     * добавить новое событие в БД
     * 
     * @param {string} name name
     */
    async pushAction(name, value) {}

    /**
     * добавить транзакцию в БД
     * 
     * @param {string} uuid uuid
     * @param {string} good good
     * @param {number} amount sum rub
     * @param {string} source transaction source
     */
    async pushTransaction(uuid, good, amount, source) {}

    /**
     * инициализировать контейнер
     */
    async init() {}
};

/**
 * контерн
 */
module.exports = DatabaseContainer;