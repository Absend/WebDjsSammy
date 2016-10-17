"use strict";

import {
    control as control
} from "./control/control.js";

(function () {
    let sammyApp = Sammy("#content", function () {

        this.get("#/", function () {
            control.initial("#content");
        });

        this.get("#/main", (context) => {
            let newData = {
                "massage": "Wellcome to simple SPA example!"
            }
            return control.post(newData);
        });

        this.get("#/people", (context) => {
            control.people("#content");
        });

        this.get("#/cats", (context) => {
            control.cats("#content");
        });
    });

    $(function () {
        sammyApp.run("#/");
    });
})();