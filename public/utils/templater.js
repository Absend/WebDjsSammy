"use strict";

let templateCompiler = {

    compile: (templateName) => {
        let url = `./view/templates/${templateName}.html`;

        return new Promise((resolve, reject) => {
            $.get(url, (htmlTemplate) => {
                let compiledTemplate = Handlebars.compile(htmlTemplate);
                resolve(compiledTemplate);
            });
        });
    }
}

export { templateCompiler }