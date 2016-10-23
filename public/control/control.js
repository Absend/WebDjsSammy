"use strict";

import {
    data as data
} from "../data/data.js";

import {
    view as view
} from "../view/view.js";

class UserCtrl {

    register(context, selector) {
        pageView.registerPage(selector)
            .then(() => {
                $("#btn-register").on("click", () => {
                    let pass = $("#tb-password").val();
                    let passConfirm = $("#tb-password-confirmv").val();
                    if (pass === passConfirm) {
                        let user = {
                            username: $("#tb-username").val(),
                            password: $("#tb-password").val()
                        };
                        userModel.register(user)
                            .then((res) => {
                                    notifier.success("Registered Successfully");
                                    context.redirect("#/login");
                                }, (err) => {
                                    notifier.error(JSON.parse(err).err);
                                },
                                function (err) {
                                    console.log(err);
                                });
                    } else {
                        notifier.error("Passwords dont match");
                        console.log("Passwords dont match");
                    }
                });
            });
    }

    login(context, selector) {
        pageView.loginPage(selector)
            .then(() => {
                $("#btn-login").on("click", () => {
                    let user = {
                        username: $("#tb-username").val(),
                        password: $("#tb-password").val()
                    };
                    userModel.login(user)
                        .then((res) => {
                                $("#page").addClass("logged-in");
                                notifier.success(`${res.username} signed in!`);
                                context.redirect("#/profile");
                            },
                            function (err) {
                                notifier.error("Invalid username or password");
                            });
                });
            });
    }

    logout(context) {
        userModel.logout()
            .then(() => {
                $("#page").removeClass("logged-in");
                context.redirect("#/main");
            });
    }
}

class DictionaryCtrl {
    constructor() {
        this.data = data.getAll()
    }

    nav(selector) {
        return view.nav(selector);
    }

    dict(selector) {
        return view.dict(selector);
    }

    html(selector) {
        this.data
            .then(function (value) {
                let data = value.db[1];
                return view.html(selector, data);
            });
    }

    css(selector) {
        this.data
            .then(function (value) {
                let data = value.db[2];
                return view.css(selector, data);
            });
    }
}

let userCtrl = new UserCtrl();
let dictionaryCtrl = new DictionaryCtrl();
export {
    userCtrl,
    dictionaryCtrl
}