"use strict";

import * as control from "./control/control.js";

(function () {
    let sammyApp = Sammy(function () {
        let $page = $("#page");

        this.get("#/", function () {
            this.redirect("#/main");
        });

        this.get("#/main", function () {
            control.dictionaryCtrl.nav("#header");
            control.dictionaryCtrl.dict("#content");
        });

        this.get("#/register", function (context) {
            if ($page.hasClass("logged-in")) {
                control.dictionaryCtrl.dict("#content");
            }
            control.userCtrl.register(context, "#log-field");
        });

        this.get("#/login", function (context) {
            if ($page.hasClass("logged-in")) {
                control.dictionaryCtrl.dict("#content");
            }
            control.userCtrl.login(context ,"#log-field");
        });

        this.get('#/logout', userCtrl.logout(context));

        this.get("#/dictionary", function () {
            control.dictionaryCtrl.dict("#content");
        });

        this.get("#/main/html", (context) => {
            control.dictionaryCtrl.html("#terms");
        });

        this.get("#/main/css", (context) => {
            control.dictionaryCtrl.css("#terms");
        });

        this.get("#/main/term", (context) => {
            console.log("Chip!");
        });
    });

    $(function () {
        sammyApp.run("#/");
    });
})();

// (function eventHandlers() {
//     var obj = {
//         name: 'Dhayalan',
//         password: 123
//     };

//     localStorage.setItem('logStorage', JSON.stringify(obj));

//     var objNew = JSON.parse(localStorage.getItem('logStorage'));

//     console.log(objNew);
//     setInterval(20);
//     localStorage.clear();
// })();

// (function eventHandlers() {
//     $(".term-value").click(() => {

//     });
// })();