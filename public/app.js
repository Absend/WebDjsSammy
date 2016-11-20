"use strict";

import {
    userCtrl as userCtrl
} from "./control/userCtrl.js";

import {
    dictionaryCtrl as dictionaryCtrl
} from "./control/dataCtrl.js";

var FocusObject = "html",
    FocusApp = "test",
    Logged = false;

// function getCookie(name) {
//     let regexp = new RegExp("(?:^" + name + "|;\s*" + name + ")=(.*?)(?:;|$)", "g");
//     let result = regexp.exec(document.cookie);
//     return (result === null) ? null : result[1];
// }
function getCookie(cname) {
    let name = cname + "=";
    let cookieArray = document.cookie.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) == " ") {
            cookie = cookie.substring(1);
        }

        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return "";
}

(function () {
    let sammyApp = Sammy(function () {

        this.get("#/", function () {
            this.redirect("#/main");
        });

        this.get("#/main", function () {
            dictionaryCtrl.nav("#header");
            dictionaryCtrl.main("#content");
            dictionaryCtrl.footer("#footer")

            let user = getCookie("username");
            if (user != "") {
                $("main").on("click", () => {
                    if ($("#btn-profile").html() !== user) {
                        $("#btn-profile").html(user);

                        $("#login").addClass("invisible");
                        $("#register").addClass("invisible");

                        $("#logout").removeClass("invisible");
                        $("#profile").removeClass("invisible");
                        $("#main-menu").removeClass("invisible");
                        Logged = true;

                        this.redirect("#/main-logged");
                    }
                });
            }
        });

        this.get("#/main/register", userCtrl.register);

        this.get("#/main/login", userCtrl.login);
        this.get("#/main-logged", function () {
            dictionaryCtrl.mainLogged("#content");
        });

        this.get("#/logout", userCtrl.logout);

        this.get("#/profile", () => {
            userCtrl.profile("#content");
        });

        this.get("#/test", () => {
            FocusApp = "test";
            dictionaryCtrl.htmlTest("#content");
        });

        this.get("#/tasks", () => {
            FocusApp = "tasks";
            dictionaryCtrl.htmlTasks("#content");
        });

        this.get("#/dict", () => {
            FocusApp = "dict";
            dictionaryCtrl.dict("#content");
        });

        // menu objects
        this.get("#/html", () => {
            $(".dropdown-btn-view").dropdown("toggle");
            FocusObject = "html";
            $("#obj-title").html(FocusObject.toUpperCase());

            switch (FocusApp) {
                case "test":
                    dictionaryCtrl.htmlTest("#content"); break;
                case "tasks":
                    dictionaryCtrl.htmlTasks("#content");
                case "dict":
                    dictionaryCtrl.html("#terms"); break;
                default:
                    dictionaryCtrl.htmlTest("#content"); break;
            }
        });

        this.get("#/css", () => {
            $(".dropdown-btn-view").dropdown("toggle");
            FocusObject = "css";
            $("#obj-title").html(FocusObject.toUpperCase());
            dictionaryCtrl.css("#terms");
        });

        this.get("#/bootstrap", () => {
            $(".dropdown-btn-view").dropdown("toggle");
            FocusObject = "bootstrap";
            $("#obj-title").html(FocusObject.toUpperCase());
            dictionaryCtrl.bootstrap("#terms");
        });

        this.get("#/less", () => {
            $(".dropdown-btn-view").dropdown("toggle");
            FocusObject = "less";
            $("#obj-title").html(FocusObject.toUpperCase());
            dictionaryCtrl.less("#terms");
        });

        this.get("#/sass", () => {
            $(".dropdown-btn-view").dropdown("toggle");
            FocusObject = "sass";
            $("#obj-title").html(FocusObject.toUpperCase());
            dictionaryCtrl.sass("#terms");
        });

        this.get("#/stylus", () => {
            $(".dropdown-btn-view").dropdown("toggle");
            FocusObject = "stylus";
            $("#obj-title").html(FocusObject.toUpperCase());
            dictionaryCtrl.stylus("#terms");
        });

        this.get("#/javascript", () => {
            $(".dropdown-btn-client").dropdown("toggle");
            FocusObject = "js";
            $("#obj-title").html(FocusObject.toUpperCase());
            dictionaryCtrl.js("#terms");
        });

        this.get("#/typescript", () => {
            $(".dropdown-btn-client").dropdown("toggle");
            FocusObject = "ts";
            $("#obj-title").html(FocusObject.toUpperCase());
            dictionaryCtrl.ts("#terms");
        });

        this.get("#/jquery", () => {
            $(".dropdown-btn-client").dropdown("toggle");
            FocusObject = "jquery";
            $("#obj-title").html(FocusObject.toUpperCase());
            dictionaryCtrl.jquery("#terms");
        });

        this.get("#/angular", () => {
            $(".dropdown-btn-client").dropdown("toggle");
            FocusObject = "angular";
            $("#obj-title").html(FocusObject.toUpperCase());
            dictionaryCtrl.angular("#terms");
        });

        this.get("#/react", () => {
            $(".dropdown-btn-client").dropdown("toggle");
            FocusObject = "react";
            $("#obj-title").html(FocusObject.toUpperCase());
            dictionaryCtrl.react("#terms");
        });

        this.get("#/nodejs", () => {
            $(".dropdown-btn-server").dropdown("toggle");
            FocusObject = "nodejs";
            $("#obj-title").html(FocusObject.toUpperCase());
            dictionaryCtrl.nodejs("#terms");
        });

        this.get("#/express", () => {
            $(".dropdown-btn-server").dropdown("toggle");
            FocusObject = "express";
            $("#obj-title").html(FocusObject.toUpperCase());
            dictionaryCtrl.express("#terms");
        });

        this.get("#/mongodb", () => {
            $(".dropdown-btn-db").dropdown("toggle");
            FocusObject = "mongodb";
            $("#obj-title").html(FocusObject.toUpperCase());
            dictionaryCtrl.mongodb("#terms");
        });

        this.get("#/mongoose", () => {
            $(".dropdown-btn-db").dropdown("toggle");
            FocusObject = "mongoose";
            $("#obj-title").html(FocusObject.toUpperCase());
            dictionaryCtrl.mongoose("#terms");
        });

        // button objects
        this.get("#/html-img", () => {
            FocusObject = "html";
            $("#obj-title").html(FocusObject.toUpperCase());
        });

        this.get("#/css-img", () => {
            FocusObject = "css";
            $("#obj-title").html(FocusObject.toUpperCase());
        });

        this.get("#/bootstrap-img", () => {
            FocusObject = "bootstrap";
            $("#obj-title").html(FocusObject.toUpperCase());
        });

        this.get("#/less-img", () => {
            FocusObject = "less";
            $("#obj-title").html(FocusObject.toUpperCase());
        });

        this.get("#/sass-img", () => {
            FocusObject = "sass";
            $("#obj-title").html(FocusObject.toUpperCase());
        });

        this.get("#/stylus-img", () => {
            FocusObject = "stylus";
            $("#obj-title").html(FocusObject.toUpperCase());
        });

        this.get("#/js-img", () => {
            FocusObject = "js";
            $("#obj-title").html(FocusObject.toUpperCase());
        });

        this.get("#/ts-img", () => {
            FocusObject = "ts";
            $("#obj-title").html(FocusObject.toUpperCase());
        });

        this.get("#/jquery-img", () => {
            FocusObject = "jquery";
            $("#obj-title").html(FocusObject.toUpperCase());
        });

        this.get("#/angular-img", () => {
            FocusObject = "angular";
            $("#obj-title").html(FocusObject.toUpperCase());
        });

        this.get("#/react-img", () => {
            FocusObject = "react";
            $("#obj-title").html(FocusObject.toUpperCase());
        });

        this.get("#/nodejs-img", () => {
            $(".dropdown-btn-server").dropdown("toggle");
            FocusObject = "nodejs";
        });

        this.get("#/express-img", () => {
            FocusObject = "express";
            $("#obj-title").html(FocusObject.toUpperCase());
        });

        this.get("#/mongodb-img", () => {
            FocusObject = "mongodb";
            $("#obj-title").html(FocusObject.toUpperCase());
        });

        this.get("#/mongoose-img", () => {
            FocusObject = "mongoose";
            $("#obj-title").html(FocusObject.toUpperCase());
        });

        this.get("#/term", () => {
            $(".term-value").on("click", function () {
                let currentTerm = $(this).html();
                $("#term-name").html(currentTerm);

                dictionaryCtrl.selectElement(currentTerm, FocusObject);
            });
        });
    });

    $(() => {
        sammyApp.run("#/");
    });

})();