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

module.exports = [

    {
        type: 'subscription',
        id: 0,

        name: "NitroFull1M",
        displayName: "NITRO FULL: 1 МЕСЯЦ",
        desc: "ваше описание товара здесь",
        imageUrl: "/public/images/previews/preview_1.png",
        themeColor: "#F04EFF",
        themeTransparent: "rgba(240, 78, 255, 0.10)",

        cost: 324
    },
    {
        type: 'subscription',
        id: 1,

        name: "NitroFullGift",
        displayName: "NITRO FULL GIFT: 1 МЕСЯЦ",
        desc: "ваше описание товара здесь",  
        imageUrl: "/public/images/previews/preview_1.png",
        themeColor: "#F04EFF",
        themeTransparent: "rgba(240, 78, 255, 0.10)",

        cost: 159
    },
    {
        type: 'subscription',
        id: 2,

        name: "NitroFull1Y",
        displayName: "NITRO FULL: 1 ГОД",
        desc: "ваше описание товара здесь",
        imageUrl: "/public/images/previews/preview_2.png",
        themeColor: "#F04EFF",
        themeTransparent: "rgba(240, 78, 255, 0.10)",

        cost: 3249,
    },
    {
        type: 'subscription',
        id: 3,

        name: "NitroBasic1M",
        displayName: "NITRO BASIC: 1 МЕСЯЦ",
        desc: "ваше описание товара здесь",
        imageUrl: "/public/images/previews/preview_3.png",
        themeColor: "#5282FF",
        themeTransparent: "rgba(82, 130, 255, 0.10)",

        cost: 159 
    },
    {
        type: 'subscription',
        id: 4,

        name: "Boost1",
        displayName: "1 БУСТ СЕРВЕРА",
        desc: "ваше описание товара здесь",
        imageUrl: "/public/images/previews/preview_5.png",
        themeColor: "#F04EFF",
        themeTransparent: "rgba(240, 78, 255, 0.10)",

        cost: 164
    },
    {
        type: 'subscription',
        id: 5,

        name: "BoostLevel3",
        displayName: "БУСТ СЕРВЕРА ДО 3 УРОВНЯ",
        desc: "ваше описание товара здесь",
        imageUrl: "/public/images/previews/preview_6.png",
        themeColor: "#F04EFF",
        themeTransparent: "rgba(240, 78, 255, 0.10)",
        
        cost: 2399
    },
    {
        type: 'subscription',
        id: 6,

        name: "ActiveDev",
        displayName: "BADGE ACTIVE DEV",
        desc: "ваше описание товара здесь",
        imageUrl: "/public/images/previews/preview_4.png",
        themeColor: "#25BA00",
        themeTransparent: "rgba(37, 186, 0, 0.10)",

        cost: 39
    },

    {
        type: 'script',
        id: 7,
        
        name: 'NotifApi',
        displayName: 'Notification Manager',
        desc: 'ваше описание товара здесь',
        themeColor: "rgba(255, 186, 0, 1)",
        themeTransparent: "rgba(255, 186, 0, 0.1)",

        cost: 1499
    },

    {
        type: 'script',
        id: 8,
        
        name: 'DiscordMSGSpammer',
        displayName: 'Discord Message Spammer',
        desc: 'ваше описание товара здесь',
        themeColor: "rgba(56, 39, 245, 1)",
        themeTransparent: "rgba(56, 39, 245, 0.1)",

        cost: 349
    },

    {
        type: 'script',
        id: 9,
        
        name: 'TelegramMSGSpammer',
        displayName: 'Telegram Message Spammer',
        desc: 'ваше описание товара здесь',
        themeColor: "rgba(73, 164, 255, 1)",
        themeTransparent: "rgba(73, 164, 255, 0.1)",

        cost: 349
    },

    {
        type: 'script',
        id: 10,
        
        name: 'ChatGPTAssistent',
        displayName: 'ChatGPT Assistent',
        desc: 'ваше описание товара здесь',
        themeColor: "rgba(9, 206, 0, 1)",
        themeTransparent: "rgba(9, 206, 0, 0.1)",

        cost: 1599
    },

    {
        type: 'script',
        id: 11,
        
        name: 'TransactionAPI',
        displayName: 'Transaction API',
        desc: 'ваше описание товара здесь',
        themeColor: "rgba(96, 162, 48, 1)",
        themeTransparent: "rgba(96, 162, 48, 0.1)",

        cost: 159
    },

    {
        type: 'script',
        id: 12,
        
        name: 'NitroAutoGive',
        displayName: 'Nitro Auto Give',
        desc: 'ваше описание товара здесь',
        themeColor: "rgba(170, 95, 215, 1)",
        themeTransparent: "rgba(170, 95, 215, 0.1)",

        cost: 2399
    },

    {
        type: 'script',
        id: 13,
        
        name: 'DiscordTokenGrabber',
        displayName: 'Discord Token Grabber',
        desc: 'ваше описание товара здесь',
        themeColor: "rgba(170, 95, 215, 1)",
        themeTransparent: "rgba(170, 95, 215, 0.1)",

        cost: 1999
    },
] 