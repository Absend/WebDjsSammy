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
    // Main
    nav(selector) {
        loadTemplate(selector, "nav-template");
    }

    footer(selector) {
        loadTemplate(selector, "footer-template");
    }

    main(selector) {
        loadTemplate(selector, "main-template");
    }

    mainLogged(selector, data) {
        loadTemplate(selector, "main-logged", data);
    }

    // Action
    test(selector) {
        loadTemplate(selector, "test-template");
    }

    tasks(selector) {
        loadTemplate(selector, "tasks-template");
    }

    dict(selector) {
        loadTemplate(selector, "dict-template");
    }

    // Options
    profile(selector, data) {
        loadTemplate(selector, "profile-template", data);
    }

    // HTML
    htmlTest(selector, data) {
        loadTemplate(selector, "html-test", data);
    }

    htmlTasks(selector, data) {
        loadTemplate(selector, "html-tasks", data);
    }

    html(selector, data) {
        loadTemplate(selector, "html-template", data);
    }

    // CSS
    cssTest(selector, data) {
        loadTemplate(selector, "css-test", data);
    }

    cssTasks(selector, data) {
        loadTemplate(selector, "css-tasks", data);
    }

    css(selector, data) {
        loadTemplate(selector, "css-template", data);
    }

    // bootstrap
    bootstrapTest(selector, data) {
        loadTemplate(selector, "bootstrap-test", data);
    }

    bootstrapTasks(selector, data) {
        loadTemplate(selector, "bootstrap-tasks", data);
    }

    bootstrap(selector, data) {
        loadTemplate(selector, "bootstrap-template", data);
    }

    // less
    lessTest(selector, data) {
        loadTemplate(selector, "less-test", data);
    }

    lessTasks(selector, data) {
        loadTemplate(selector, "less-tasks", data);
    }

    less(selector, data) {
        loadTemplate(selector, "less-template", data);
    }

    // sass
    sassTest(selector, data) {
        loadTemplate(selector, "sass-test", data);
    }

    sassTasks(selector, data) {
        loadTemplate(selector, "sass-tasks", data);
    }

    sass(selector, data) {
        loadTemplate(selector, "sass-template", data);
    }

    // stylus
    stylusTest(selector, data) {
        loadTemplate(selector, "stylus-test", data);
    }

    stylusTasks(selector, data) {
        loadTemplate(selector, "stylus-tasks", data);
    }

    stylus(selector, data) {
        loadTemplate(selector, "stylus-template", data);
    }

    // javascript
    jsTest(selector, data) {
        loadTemplate(selector, "js-test", data);
    }

    jsTasks(selector, data) {
        loadTemplate(selector, "js-tasks", data);
    }

    js(selector, data) {
        loadTemplate(selector, "js-template", data);
    }

    // typescript
    tsTest(selector, data) {
        loadTemplate(selector, "ts-test", data);
    }

    tsTasks(selector, data) {
        loadTemplate(selector, "ts-tasks", data);
    }

    ts(selector, data) {
        loadTemplate(selector, "ts-template", data);
    }

    // jquery
    jqueryTest(selector, data) {
        loadTemplate(selector, "jquery-test", data);
    }

    jqueryTasks(selector, data) {
        loadTemplate(selector, "jquery-tasks", data);
    }

    jquery(selector, data) {
        loadTemplate(selector, "jquery-template", data);
    }

    // angular
    angularTest(selector, data) {
        loadTemplate(selector, "angular-test", data);
    }

    angularTasks(selector, data) {
        loadTemplate(selector, "angular-tasks", data);
    }

    angular(selector, data) {
        loadTemplate(selector, "angular-template", data);
    }

    // react
    reactTest(selector, data) {
        loadTemplate(selector, "react-test", data);
    }

    reactTasks(selector, data) {
        loadTemplate(selector, "react-tasks", data);
    }

    react(selector, data) {
        loadTemplate(selector, "react-template", data);
    }

    // nodejs
    nodejsTest(selector, data) {
        loadTemplate(selector, "nodejs-test", data);
    }

    nodejsTasks(selector, data) {
        loadTemplate(selector, "nodejs-tasks", data);
    }

    nodejs(selector, data) {
        loadTemplate(selector, "nodejs-template", data);
    }

    // express
    expressTest(selector, data) {
        loadTemplate(selector, "express-test", data);
    }

    expressTasks(selector, data) {
        loadTemplate(selector, "express-tasks", data);
    }

    express(selector, data) {
        loadTemplate(selector, "express-template", data);
    }

    // mongodb
    mongodbTest(selector, data) {
        loadTemplate(selector, "mongodb-test", data);
    }

    mongodbTasks(selector, data) {
        loadTemplate(selector, "mongodb-tasks", data);
    }

    mongodb(selector, data) {
        loadTemplate(selector, "mongodb-template", data);
    }
}

let view = new View();
export {
    view
}