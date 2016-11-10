"use strict";

import {
    data as data
} from "../data/data.js";

import {
    view as view
} from "../view/template-loader.js";

import {
    validator as validator
} from "../utils/validator.js";

import {
    notifier as notifier
} from "../utils/notifier.js";

import {
    dictionaryCtrl as dictionaryCtrl
} from "./dataCtrl.js";

class UserCtrl {
    register() {
        $("#btn-register").on("click", function () {
            let username = $("#tb-username").val();
            let password = $("#tb-password").val();
            let passwordConfirm = $("#tb-password-confirm").val();

            if (validator.isValidUsername(username) && validator.isValidPassword(password)) {

                if (password === passwordConfirm) {
                    let user = {
                        username: username,
                        password: CryptoJS.SHA1(password).toString()
                    };

                    data.register(user);

                    $("#btn-profile").html(username);

                    $("#login").addClass("invisible");
                    $("#register").addClass("invisible");

                    $("#logout").removeClass("invisible");
                    $("#profile").removeClass("invisible");
                    $("#main-menu").removeClass("invisible");

                    notifier.success("Register success!");
                    dictionaryCtrl.mainLogged("#content");
                } else {
                    notifier.error("Password does not match!");
                }
            }
        });

        // let user = {
        //     username: username,
        //     password: password
        // };

        // localStorage.setItem("userStorage", JSON.stringify(user));
    }

    login() {
        $("#btn-login").on("click", function () {
            let username = $("#tb-username-log").val();
            let password = $("#tb-password-log").val();

            if (validator.isValidUsername(username) && validator.isValidPassword(password)) {

                $("#btn-profile").html(username);

                $("#login").addClass("invisible");
                $("#register").addClass("invisible");

                $("#logout").removeClass("invisible");
                $("#profile").removeClass("invisible");
                $("#main-menu").removeClass("invisible");
                notifier.success("LogIn success!");
                dictionaryCtrl.mainLogged("#content");
            }
        });
        //let userStore = JSON.parse(localStorage.getItem("userStorage"));
    }

    logout() {
        $("#btn-logout").on("click", function () {

            $("#logout").addClass("invisible");
            $("#profile").addClass("invisible");

            $("#main-menu").addClass("invisible");
            $("#login").removeClass("invisible");
            $("#register").removeClass("invisible");

            dictionaryCtrl.main("#content");

            console.log('logout');

        });
    }

    profile(selector) {
        let data = {};
        view.profile(selector, data)
    }
}

let userCtrl = new UserCtrl();
export {
    userCtrl
}