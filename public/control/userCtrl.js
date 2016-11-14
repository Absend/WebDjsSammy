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

function allLocalStorage() {
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
function setCookie(name, value, expires, path, domain) {
    let cookie = name + "=" + escape(value) + ";";

    if (expires) {
        // If it's a date
        if (expires instanceof Date) {
            // If it isn't a valid date
            if (isNaN(expires.getTime()))
                expires = new Date();
        }
        else
            expires = new Date(new Date().getTime() + parseInt(expires) * 1000 * 60 * 60 * 24);

        cookie += "expires=" + expires.toGMTString() + ";";
    }
    if (path)
        cookie += "path=" + path + ";";
    if (domain)
        cookie += "domain=" + domain + ";";

    document.cookie = cookie;
}

class UserCtrl {
    register() {
        $("#btn-register").on("click", function () {
            let username = $("#tb-username").val();
            let password = $("#tb-password").val();
            let passwordConfirm = $("#tb-password-confirm").val();

            if (validator.isValidUsername(username)) {
                data.getUsers().then((res) => {
                    let usernames = [];
                    let len = res.result.length,
                        i;
                    for (i = 0; i < len; i += 1) {
                        usernames.push(res.result[i].username);
                    }

                    let userIndex = usernames.indexOf(username);
                    if (userIndex === -1) {
                        if (validator.isValidPassword(password)) {
                            if (password === passwordConfirm) {
                                let user = {
                                    username: username,
                                    password: CryptoJS.SHA1(password).toString(),
                                    tests: [],
                                    tasks: []
                                };

                                data.register(user);
                                notifier.success("Register success!");

                                setCookie("username", username, 30);
                                localStorage.setItem(user.username, CryptoJS.SHA1(user.password).toString());

                                // UI
                                $("#btn-profile").html(username);

                                $("#login").addClass("invisible");
                                $("#register").addClass("invisible");

                                $("#logout").removeClass("invisible");
                                $("#profile").removeClass("invisible");
                                $("#main-menu").removeClass("invisible");

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
                        notifier.error("Username exists! Please, choose another one!");
                    }
                });
            }
        });
    }

    login() {
        $("#btn-login").on("click", function () {
            let username = $("#tb-username-log").val();
            if (validator.isValidUsername(username)) {
                data.getUsers().then((res) => {
                    let usernames = [];
                    let len = res.result.length,
                        i;
                    for (i = 0; i < len; i += 1) {
                        usernames.push(res.result[i].username);
                    }

                    let userIndex = usernames.indexOf(username);
                    if (userIndex !== -1) {
                        let password = $("#tb-password-log").val();
                        if (validator.isValidPassword(password)) {
                            if (res.result[userIndex].password === CryptoJS.SHA1(password).toString()) {

                                notifier.success("LogIn success!");
                                setCookie("username", username, 30);

                                $("#btn-profile").html(username);

                                $("#login").addClass("invisible");
                                $("#register").addClass("invisible");

                                $("#logout").removeClass("invisible");
                                $("#profile").removeClass("invisible");
                                $("#main-menu").removeClass("invisible");

                                $("#tb-username-log").val("");
                                $("#tb-password-log").val("");

                                dictionaryCtrl.mainLogged("#content");
                            }
                            else {
                                notifier.error("Password does not match!");
                            }
                        }
                    }
                    else {
                        notifier.error("Username does not exist! Please, register!");
                    }
                });
            }
        });
    }

    logout() {
        $("#btn-logout").on("click", function () {
            
            $("#btn-profile").html("");
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