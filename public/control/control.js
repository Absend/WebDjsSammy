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

    nav(selector) {
        return view.nav(selector);
    }

    dict(selector) {
        return view.dict(selector);
    }

    html(selector) {
        this.data
            .then(function (value) {
                let data = value.db[0];
                return view.html(selector, data);
            });
    }
}

let control = new Control();
export {
    control
}