"use strict";

import {
    ajaxRequester as requester
} from "../utils/requester.js";

class Data {
    constructor() {
        this.url = "./data/db.json";
    }

    getAll() {
        return requester.getJSON(this.url);
    }
}

let data = new Data();
export {
    data
}