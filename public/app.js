"use strict";

import {
    userCtrl as userCtrl
} from "./control/userCtrl.js";

import {
    dictionaryCtrl as dictionaryCtrl
} from "./control/dataCtrl.js";

(function () {
    let sammyApp = Sammy(function () {

        this.get("#/", function () {
            this.redirect("#/main");
        });

        this.get("#/main", function () {
            dictionaryCtrl.nav("#header");
            dictionaryCtrl.main("#content");
            dictionaryCtrl.footer("#footer");
        });

        this.get("#/main/register", userCtrl.register);

        this.get("#/main/login", userCtrl.login);

        this.get("#/logout", userCtrl.logout);

        this.get("#/profile", function () {
            userCtrl.profile("#content");
        });

        this.get("#/html", () => {
            // dictionaryCtrl.htmlTest("#content");
            // dictionaryCtrl.htmlTasks("#content");
            dictionaryCtrl.html("#terms");
        });

        this.get("#/test", function () {
            dictionaryCtrl.htmlTest("#content");
        });

        this.get("#/tasks", function () {
            dictionaryCtrl.htmlTasks("#content");
        });

        this.get("#/dict", function () {
            dictionaryCtrl.dict("#content");
        });

        this.get("#/term", function () {
            $(".term-value").on("click", function () {
                let currentTerm = $(this).html();
                $("#term-name").html(currentTerm);

                dictionaryCtrl.selectElement(currentTerm);
            });
        });
    });

    $(function () {
        sammyApp.run("#/");
    });

})();