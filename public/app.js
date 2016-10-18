"use strict";

import {
    control as control
} from "./control/control.js";

(function () {
    let sammyApp = Sammy(function () {

        this.get("#/", function () {
            this.redirect('#/main');
        });

        this.get("#/main", function () {
            control.nav("#header");
            control.dict("#content");
        });

        this.get("#/html", (context) => {
            control.html("#terms");
        });
    });

    $(function () {
        sammyApp.run("#/");
    });
})();