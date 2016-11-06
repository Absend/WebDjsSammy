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

    register(user) {
        return requester.postJSON('api/users', user);
    }
}

let data = new Data();
export {
    data
}