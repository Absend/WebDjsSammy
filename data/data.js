/* globals module require*/

"use strict";

const authKeysGenerator = require("../utils/auth-key-generator")();

module.exports = function(db) {
    return {
        
        getMaterials(keyword) {
            let keywordToLower = keyword.toLowerCase();
            return db.get("data")
                .value();
        }
    };
};