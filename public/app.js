"use strict";

import {
    userCtrl as userCtrl
} from "./control/userCtrl.js";

import {
    dictionaryCtrl as dictionaryCtrl
} from "./control/dataCtrl.js";

var obj = "html";

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

        this.get("#/test", function () {
            dictionaryCtrl.htmlTest("#content");
        });

        this.get("#/tasks", function () {
            dictionaryCtrl.htmlTasks("#content");
        });

        this.get("#/dict", function () {
            dictionaryCtrl.dict("#content");
        });

        this.get("#/html", () => {
            // dictionaryCtrl.htmlTest("#content");
            // dictionaryCtrl.htmlTasks("#content");
            obj = "html";
            dictionaryCtrl.html("#terms");
        });

        this.get("#/css", () => {
            obj = "css";
            dictionaryCtrl.css("#terms");
        });

        this.get("#/bootstrap", () => {
            obj = "bootstrap";
            dictionaryCtrl.bootstrap("#terms");
        });

        this.get("#/less", () => {
            obj = "less";
            dictionaryCtrl.less("#terms");
        });

        this.get("#/sass", () => {
            obj = "sass";
            dictionaryCtrl.sass("#terms");
        });

        this.get("#/stylus", () => {
            obj = "stylus";
            dictionaryCtrl.stylus("#terms");
        });

        this.get("#/javascript", () => {
            obj = "js";
            dictionaryCtrl.js("#terms");
        });

        this.get("#/typescript", () => {
            obj = "ts";
            dictionaryCtrl.ts("#terms");
        });

        this.get("#/jquery", () => {
            obj = "jquery";
            dictionaryCtrl.jquery("#terms");
        });

        this.get("#/angular", () => {
            obj = "angular";
            dictionaryCtrl.angular("#terms");
        });

        this.get("#/react", () => {
            obj = "react";
            dictionaryCtrl.react("#terms");
        });

        this.get("#/nodejs", () => {
            obj = "nodejs";
            dictionaryCtrl.nodejs("#terms");
        });

        this.get("#/express", () => {
            obj = "express";
            dictionaryCtrl.express("#terms");
        });

        this.get("#/mongodb", () => {
            obj = "mongodb";
            dictionaryCtrl.mongodb("#terms");
        });

        this.get("#/term", function () {
            $(".term-value").on("click", function () {
                let currentTerm = $(this).html();
                $("#term-name").html(currentTerm);

                dictionaryCtrl.selectElement(currentTerm, obj);
            });
        });
    });

    $(function () {
        sammyApp.run("#/");
    });

})();