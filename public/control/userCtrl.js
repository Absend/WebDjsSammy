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

function allStorage() {
    let userObjs = [];
    let passObjs = [];
    for (let i = 0; i < localStorage.length; i += 1) {
        userObjs.push(localStorage.key(i));
        passObjs.push(localStorage.getItem(localStorage.key(i)));
    }

    return {
        "usersData": userObjs,
        "passesData": passObjs
    };
};

class UserCtrl {
    register() {
        $("#btn-register").on("click", function () {
            let username = $("#tb-username").val();
            let password = $("#tb-password").val();
            let passwordConfirm = $("#tb-password-confirm").val();

            if (validator.isValidUsername(username)) {
                let userIndex = allStorage().usersData.indexOf(username);
                if (userIndex === -1) {
                    if (validator.isValidPassword(password)) {
                        if (password === passwordConfirm) {
                            let user = {
                                username: username,
                                password: CryptoJS.SHA1(password).toString(),
                                tests: [],
                                tasks: []
                            };

                            localStorage.setItem(user.username, CryptoJS.SHA1(user.password).toString());
                            data.register(user);

                            // UI
                            $("#btn-profile").html(username);

                            $("#login").addClass("invisible");
                            $("#register").addClass("invisible");

                            $("#logout").removeClass("invisible");
                            $("#profile").removeClass("invisible");
                            $("#main-menu").removeClass("invisible");

                            notifier.success("Register success!");
                            $("#tb-username").val("");
                            $("#tb-password").val("");
                            $("#tb-password-confirm").val("")
                            dictionaryCtrl.mainLogged("#content");
                        } else {
                            notifier.error("Password does not match!");
                        }
                    }
                }
                else {
                    notifier.success("Username exists! Please, choose anotherone!");
                }
            }
        });
    }

    login() {
        $("#btn-login").on("click", function () {
            let username = $("#tb-username-log").val();
            let password = $("#tb-password-log").val();

            if (validator.isValidUsername(username) && validator.isValidPassword(password)) {
                let userIndex = allStorage().usersData.indexOf(username);
                if (userIndex !== -1) {
                    if (allStorage().passesData[userIndex] === CryptoJS.SHA1(CryptoJS.SHA1(password).toString()).toString()) {
                        $("#btn-profile").html(username);

                        $("#login").addClass("invisible");
                        $("#register").addClass("invisible");

                        $("#logout").removeClass("invisible");
                        $("#profile").removeClass("invisible");
                        $("#main-menu").removeClass("invisible");

                        notifier.success("LogIn success!");
                        $("#tb-username-log").val("");
                        $("#tb-password-log").val("");
                        dictionaryCtrl.mainLogged("#content");
                    }
                    else {
                        notifier.error("Password does not match!");
                    }
                }
                else {
                    notifier.error("Username does not exist! Please, register!");
                }
            }
        });
    }

    logout() {
        $("#btn-logout").on("click", function () {

            $("#logout").addClass("invisible");
            $("#profile").addClass("invisible");

            $("#main-menu").addClass("invisible");
            $("#login").removeClass("invisible");
            $("#register").removeClass("invisible");

            dictionaryCtrl.main("#content");
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