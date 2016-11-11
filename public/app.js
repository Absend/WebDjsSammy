"use strict";

import {
    userCtrl as userCtrl
} from "./control/userCtrl.js";

import {
    dictionaryCtrl as dictionaryCtrl
} from "./control/dataCtrl.js";

var FocusObject = "html";

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
            $(".dropdown-btn-view").dropdown("toggle");
            FocusObject = "html";

            // dictionaryCtrl.htmlTest("#content");
            // dictionaryCtrl.htmlTasks("#content");
            dictionaryCtrl.html("#terms");
        });

        this.get("#/css", () => {
            $(".dropdown-btn-view").dropdown("toggle");
            FocusObject = "css";
            dictionaryCtrl.css("#terms");
        });

        this.get("#/bootstrap", () => {
            $(".dropdown-btn-view").dropdown("toggle");
            FocusObject = "bootstrap";
            dictionaryCtrl.bootstrap("#terms");
        });

        this.get("#/less", () => {
            $(".dropdown-btn-view").dropdown("toggle");
            FocusObject = "less";
            dictionaryCtrl.less("#terms");
        });

        this.get("#/sass", () => {
            $(".dropdown-btn-view").dropdown("toggle");
            FocusObject = "sass";
            dictionaryCtrl.sass("#terms");
        });

        this.get("#/stylus", () => {
            $(".dropdown-btn-view").dropdown("toggle");
            FocusObject = "stylus";
            dictionaryCtrl.stylus("#terms");
        });

        this.get("#/javascript", () => {
            $(".dropdown-btn-client").dropdown("toggle");
            FocusObject = "js";
            dictionaryCtrl.js("#terms");
        });

        this.get("#/typescript", () => {
            $(".dropdown-btn-client").dropdown("toggle");
            FocusObject = "ts";
            dictionaryCtrl.ts("#terms");
        });

        this.get("#/jquery", () => {
            $(".dropdown-btn-client").dropdown("toggle");
            FocusObject = "jquery";
            dictionaryCtrl.jquery("#terms");
        });

        this.get("#/angular", () => {
            $(".dropdown-btn-client").dropdown("toggle");
            FocusObject = "angular";
            dictionaryCtrl.angular("#terms");
        });

        this.get("#/react", () => {
            $(".dropdown-btn-client").dropdown("toggle");
            FocusObject = "react";
            dictionaryCtrl.react("#terms");
        });

        this.get("#/nodejs", () => {
            $(".dropdown-btn-server").dropdown("toggle");
            FocusObject = "nodejs";
            dictionaryCtrl.nodejs("#terms");
        });

        this.get("#/express", () => {
            $(".dropdown-btn-server").dropdown("toggle");
            FocusObject = "express";
            dictionaryCtrl.express("#terms");
        });

        this.get("#/mongodb", () => {
            $(".dropdown-btn-db").dropdown("toggle");
            FocusObject = "mongodb";
            dictionaryCtrl.mongodb("#terms");
        });

        this.get("#/term", function () {
            $(".term-value").on("click", function () {
                let currentTerm = $(this).html();
                $("#term-name").html(currentTerm);

                dictionaryCtrl.selectElement(currentTerm, FocusObject);
            });
        });
    });

    $(function () {
        sammyApp.run("#/");
    });

})();