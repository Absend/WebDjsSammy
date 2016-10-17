"use strict";

import {
    data as data
} from "../data/data.js";

import {
    view as view
} from "../view/view.js";

class Control {
    constructor() {
        this.data = data.getAll()
    }

    initial(selector) {
        this.data
            .then(function (value) {
                return view.dict(selector);
            });
    }

    html(selector) {
        this.data
            .then(function (value) {
                let data = value.db[0];
                return view.dict(selector, data);
            });
    }
}

let control = new Control();
export {
    control
}