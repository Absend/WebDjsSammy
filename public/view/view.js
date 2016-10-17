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
    pageInitial(selector) {
        loadTemplate(selector, "initial");
    }

    pagePeople(selector, data) {
        loadTemplate(selector, "people", data);
    }

    pageCats(selector, data) {
        loadTemplate(selector, "cats", data);
    }
}

let view = new View();
export {
    view
}