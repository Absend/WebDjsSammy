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
            //dictionaryCtrl.dict("#content");
            dictionaryCtrl.footer("#footer");
        });

        this.get("#/main/register", userCtrl.register);

        this.get("#/main/login", userCtrl.login);

        this.get("#/main/logout", userCtrl.logout);

        this.get("#/main/html", () => {
            dictionaryCtrl.htmlTest("#content");
            $("#dict-btn").on("click", () => {
                dictionaryCtrl.html("#terms");
            });
        });

        this.get("#/main/term", function () {
            $(".term-value").on("click", function () {
                let currentTerm = $(this).html();
                $("#term-name").html(currentTerm);

                dictionaryCtrl.selectElement(currentTerm);
            });
        });

        this.get("#/dict", function(){
            dictionaryCtrl.dict("#content");
        });
    });

    $(function () {
        sammyApp.run("#/");
    });

})();