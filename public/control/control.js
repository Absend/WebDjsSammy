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
        return view.pageInitial(selector);
    }

    post(obj) {
        return data.add(obj);
    }

    people(selector) {
        this.data
            .then(function (value) {
                let data = value.db[0];
                console.log(data + " people loaded");
                return view.pagePeople(selector, data);
            });
    }

    cats(selector) {
        this.data
            .then(function (value) {
                let data = value.db[1];
                console.log(data);
                return view.pageCats(selector, data);
            });
    }
}

let control = new Control();
export {
    control
}