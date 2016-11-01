"use strict";

import {
    templateCompiler as templateCompiler
} from "../utils/templater.js";

function loadTemplate(selector, templateName, data) {
    let selectedItem = $(selector);
    data = data || Object;

    return templateCompiler.compile(templateName).then((compiledTemplate) => {
        selectedItem.html(compiledTemplate(data));
    });
}

class View {

    nav(selector) {
        loadTemplate(selector, "nav-template");
    }

    footer(selector) {
        loadTemplate(selector, "footer-template");
    }

    dict(selector) {
        loadTemplate(selector, "dict-template");
    }

    html(selector, data) {
        loadTemplate(selector, "html-template", data);
    }
}

let view = new View();
export {
    view
}