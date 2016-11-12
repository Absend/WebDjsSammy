"use strict";

const Router = require("express").Router;

module.exports = function (data) {
    let router = new Router();

    router
        .get("/", (req, res) => {
            let keyword = req.query.filter || "";

            let materials = data
                .getMaterials(keyword)
                .map();

            res.send({
                result: materials
            });
        })

    return router;
};