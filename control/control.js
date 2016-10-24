"use strict";

import {
    data as data
} from "../data/data.js";

import {
    view as view
} from "../view/view.js";

class DictionaryCtrl {
    constructor() {
        this.data = data.getAll();
    }

    nav(selector) {
        return view.nav(selector);
    }

    footer(selector) {
        return view.footer(selector);
    }

    dict(selector) {
        return view.dict(selector);
    }

    html(selector) {
        this.data
            .then(function (res) {
                let data = res.db[0].data[0];
                return view.html(selector, data);
            });
    }

    element(currentTerm) {
        return this.data
            .then(function (res) {
                let data = res.db[0].data[0].html;
                let len = data.length;

                currentTerm = currentTerm.substr(4, currentTerm.length - 8);
                currentTerm = "<" + currentTerm + ">";

                for (let i = 0; i < len; i += 1) {
                    if (data[i].title == currentTerm) {
                        return data[i].description;
                    }
                }
            });
    }
}

let dictionaryCtrl = new DictionaryCtrl();
export {
    dictionaryCtrl
}