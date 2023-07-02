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

var sql = new SQLInstance();
sql.setCredentials(process.env.SQL_PASSWORD, process.env.SQL_HOST, "nitro", "nitrostorm");
sql.init();


app.get(`${versioning.prefix}/signup`, (req, res) => {
    res.send('<h1>Hello World</h1>')
});

app.listen(PORT, (e) => {
    if(e) {
        console.error(`error on listening: ${e}`);
        throw e;
    } else {
        console.log(`running on port ${PORT}`);
    }
})
console.log("hello, world!");