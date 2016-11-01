"use strict";

import {
    data as data
} from "../data/data.js";

import {
    view as view
} from "../view/view.js";

import {
    validator as validator
} from "../utils/validator.js";

import {
    notifier as notifier
} from "../utils/notifier.js";

class UserCtrl {
    register() {
        $("#btn-register").on("click", function () {
            let username = $("#tb-username").val(),
                password = $("#tb-password").val(),
                passwordConfirm = $("#tb-password-confirm").val(),
                passwordHash = CryptoJS.SHA1(password).toString();

            validator.validateUsername(username);
            validator.validatePassword(password);

            if (password === passwordConfirm) {
                console.log(username);
                console.log(password);
                console.log(passwordHash);
                notifier.success("Register success!");
            } else {
                notifier.error("Password does not match!");
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
            let username = $("#tb-username-log").val(),
                password = $("#tb-password-log").val();

            console.log(username);
            console.log(password);

            $("#login").addClass("invisible");
            $("#register").addClass("invisible");
            $("#logout").removeClass("invisible");
            $("#main-menu").removeClass("invisible");
        });
        //let userStore = JSON.parse(localStorage.getItem("userStorage"));
    }

    logout() {
        $("#btn-logout").on("click", function () {
            $("#logout").addClass("invisible");
            $("#main-menu").addClass("invisible");
            $("#login").removeClass("invisible");
            $("#register").removeClass("invisible");

            console.log('logout');
            
        });
    }
}

let userCtrl = new UserCtrl();
export {
    userCtrl
}