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
    register(context) {
        $("#btn-register").on("click", function () {
            let username = $("#tb-username").val();
            validator.validateUsername(username);

            let password = $("#tb-password").val();
            validator.validatePassword(password);

            let passwordConfirm = $("#tb-password-confirm").val();

            if (password === passwordConfirm) {
                let user = {
                    username: username,
                    password: CryptoJS.SHA1(password).toString()
                };
                
                data.register(user);

                if (true) {
                    notifier.success("Register success!");
                }
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
            $("#btn-profile").html(username);

            console.log(username);  

            console.log(username)
            console.log(password);

            $("#login").addClass("invisible");
            $("#register").addClass("invisible");
            $("#logout").removeClass("invisible");
            $("#profile").removeClass("invisible");
            $("#main-menu").removeClass("invisible");
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

            console.log('logout');

        });
    }
}

let userCtrl = new UserCtrl();
export {
    userCtrl
}