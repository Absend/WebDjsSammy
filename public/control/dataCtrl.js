"use strict";

import {
    data as data
} from "../data/data.js";

import {
    view as view
} from "../view/template-loader.js";

import {
    validator as validator
} from "../utils/validator.js";

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

    main(selector){
        return view.main(selector);
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

    htmlTest(selector) {
        this.data
            .then(function (res) {
                let data = res.db[0].data[0];
                return view.htmlTest(selector, data);
            });
    }
    htmlTasks(selector) {
        this.data
            .then(function (res) {
                let data = res.db[0].data[0];
                return view.htmlTasks(selector, data);
            });
    }

    selectElement(currentTerm) {
        return this.data
            .then(function (res) {
                let data = res.db[0].data[0].html;
                let len = data.length;

                // before: &lt;div&gt;
                currentTerm = currentTerm.substr(4, currentTerm.length - 8);
                currentTerm = "<" + currentTerm + ">";
                // after: <div>

                for (let i = 0; i < len; i += 1) {
                    if (data[i].title == currentTerm) {
                        return new Array(data[i].description, data[i].examples, data[i].links);
                    }
                }
            })
            .then((res) => {
                // data-binding term.title -> term.definition
                $("#term-definition").html(res[0]);
                $("#term-examples").html(res[1]);
                $("#term-more").attr("href", res[2]);
            });
    }
}

let dictionaryCtrl = new DictionaryCtrl();
export {
    dictionaryCtrl
}
