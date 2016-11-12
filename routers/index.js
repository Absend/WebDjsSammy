/* globals require, module, console */

"use strict";


function getRoutes(app) {
    let routes = [],
        route;

    app._router.stack.forEach(function(middleware) {
        if (middleware.route) { // routes registered directly on the app
            routes.push(middleware.route);
        } else if (middleware.name === "router") { // router middleware
            middleware.handle.stack.forEach(function(handler) {
                route = handler.route;
                let method = Object.keys(route.methods)[0].toUpperCase();
                routes.push(`${method} ${middleware.regexp}/${route.path}`);
            });
        }
    });
    return routes;
}

module.exports = function(app, data) {
    let materialsRouter = require("./materials")(data);

    app.use("/api/data", materialsRouter);

    let routes = getRoutes(app);
    app.use("/help/routes", (req, res) => {
        return res.send({
            result: routes
        });
    });
};