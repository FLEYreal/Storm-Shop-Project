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

const goodlist = require("./goodlist");

const getUnixTime = () => {
    return Math.ceil(newDate().getTime() / 1000);
}
const getGood = (good = "") => {
    foundGood = undefined;
    
    goodlist.forEach((gd) => {
        if (gd.name == good) foundGood = gd;
    });

    return foundGood;
}

const validateUUID = (uuid = "") => {
    const hexTable = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F'];

    var i = 0;
    var j = -1;

    j++;
    while (i < 8) {
        if (!hexTable.includes(uuid[j])) return false;

        i++;
        j++;
    }
    i = 0;

    if (uuid[j] !== '-') return false;

    j++;
    while (i < 4) {
        if (!hexTable.includes(uuid[j])) return false;

        i++;
        j++;
    }
    i = 0;

    if (uuid[j] !== '-') return false;

    j++;
    while (i < 4) {
        if (!hexTable.includes(uuid[j])) return false;

        i++;
        j++;
    }
    i = 0;

    if (uuid[j] !== '-') return false;

    j++;
    while (i < 4) {
        if (!hexTable.includes(uuid[j])) return false;

        i++;
        j++;
    }
    i = 0;

    if (uuid[j] !== '-') return false;

    j++;
    while (i < 12) {
        if (!hexTable.includes(uuid[j])) return false;

        i++;
        j++;
    }
    i = 0;

    return true;
}

module.exports = {
    /**
     * get unix time
     * @return {number} unix timestamp
    */
    getUnixTime: getUnixTime,

    /**
     * get good data from its string id
     * @param {string} good good
     * @return {Object | undefined} good data
    */
    getGood: getGood,

    /**
     * validate UUID string
     * @param {string} uuid uuid
     * @return {boolean} is uuid correct or not
     */
    validateUUID: validateUUID
}