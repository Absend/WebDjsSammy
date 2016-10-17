"use strict";

import {
    control as control
} from "./control/control.js";

(function () {
    let sammyApp = Sammy("#content", function () {

        this.get("#/", function () {
        });

        this.get("#/main", (context) => {
            let newData = {
                "massage": "Wellcome to simple SPA example!"
            }
            return control.post(newData);
        });

        this.get("#/html", (context) => {
            control.html("#content");
        });

        this.get("#/css", (context) => {
            control.cats("#content");
        });
    });

    $(function () {
        sammyApp.run("#/");
    });
})();