"use strict";

function loadTemplate(selector, templateName, data) {
    let selectedItem = $(selector);
    let url = `./view/templates/${templateName}.html`;

    return new Promise((resolve, reject) => {
        $.get(url, (htmlTemplate) => {
            let compiledTemplate = Handlebars.compile(htmlTemplate);
            resolve(compiledTemplate);
        });
    }).then((compiledTemplate) => {
        selectedItem.html(compiledTemplate(data));
    });
}

class View {
    dict(selector) {
        loadTemplate(selector, "dict-template");
    }

    nav(selector) {
        loadTemplate(selector, "nav-template");
    }

    html(selector, data){
        loadTemplate(selector, "html-template", data);
    }
}

let view = new View();
export {
    view
}