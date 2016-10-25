"use strict";

import * as control from "./control/control.js";

(function () {
    let sammyApp = Sammy(function () {
        let $page = $("#page");

        this.get("#/", function () {
            $("#content").html += "Loading...";
            this.redirect("#/main");
        });

        this.get("#/main", function () {
            control.dictionaryCtrl.nav("#header");
            control.dictionaryCtrl.dict("#content");
            control.dictionaryCtrl.footer("#footer");
        });

        this.get("#/main/html", function () {
            control.dictionaryCtrl.html("#terms");
        });

        this.get("#/main/term", function () {
            $(".term-value").on("click", function () {
                let currentTerm = $(this).html();
                $("#term-name").html(currentTerm);

                // data-binding term.title -> term.definition
                control.dictionaryCtrl.element(currentTerm).then((res) => {
                    $("#term-definition").html(res[0]);
                    console.log(res[0]);
                    $("#term-examples").html(res[1]);
                    $("#term-more").attr("href", res[2]);
                    console.log(res[2]);
                });
            });
        });
    });

    $(function () {
        sammyApp.run("#/");
    });
})();
