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

    main(selector) {
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

    css(selector) {
        this.data
            .then(function (res) {
                let data = res.db[0].data[0];
                return view.css(selector, data);
            });
    }

    bootstrap(selector) {
        this.data
            .then(function (res) {
                let data = res.db[0].data[0];
                return view.bootstrap(selector, data);
            });
    }

    less(selector) {
        this.data
            .then(function (res) {
                let data = res.db[0].data[0];
                return view.less(selector, data);
            });
    }

    sass(selector) {
        this.data
            .then(function (res) {
                let data = res.db[0].data[0];
                return view.sass(selector, data);
            });
    }

    stylus(selector) {
        this.data
            .then(function (res) {
                let data = res.db[0].data[0];
                return view.stylus(selector, data);
            });
    }

    js(selector) {
        this.data
            .then(function (res) {
                let data = res.db[0].data[0];
                return view.js(selector, data);
            });
    }

    ts(selector) {
        this.data
            .then(function (res) {
                let data = res.db[0].data[0];
                return view.ts(selector, data);
            });
    }

    jquery(selector) {
        this.data
            .then(function (res) {
                let data = res.db[0].data[0];
                return view.jquery(selector, data);
            });
    }

    angular(selector) {
        this.data
            .then(function (res) {
                let data = res.db[0].data[0];
                return view.angular(selector, data);
            });
    }

    react(selector) {
        this.data
            .then(function (res) {
                let data = res.db[0].data[0];
                return view.react(selector, data);
            });
    }

    nodejs(selector) {
        this.data
            .then(function (res) {
                let data = res.db[0].data[0];
                return view.nodejs(selector, data);
            });
    }

    express(selector) {
        this.data
            .then(function (res) {
                let data = res.db[0].data[0];
                return view.express(selector, data);
            });
    }

    mongodb(selector) {
        this.data
            .then(function (res) {
                let data = res.db[0].data[0];
                return view.mongodb(selector, data);
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

    selectElement(currentTerm, obj) {
        return this.data
            .then(function (res) {
                let db = res.db[0].data[0],
                    data = db.html;
                switch (obj) {
                    case "css":
                        data = db.css; break;
                    case "bootstrap":
                        data = db.bootstrap; break;
                    case "less":
                        data = db.less; break;
                    case "sass":
                        data = db.sass; break;
                    case "stylus":
                        data = db.stylus; break;
                    case "js":
                        data = db.javascript; break;
                    case "ts":
                        data = db.typescript; break;
                    case "jquery":
                        data = db.jquery; break;
                    case "angular":
                        data = db.angular; break;
                    case "react":
                        data = db.react; break;
                    case "nodejs":
                        data = db.nodejs; break;
                    case "express":
                        data = db.express; break;
                    case "mongodb":
                        data = db.mongodb; break;
                    default:
                        data = db.html; break;
                }

                let len = data.length;

                if (currentTerm[0] === "&") {
                    // before: &lt;div&gt;
                    currentTerm = currentTerm.substr(4, currentTerm.length - 8);
                    currentTerm = "<" + currentTerm + ">";
                    // after: <div>
                }

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
