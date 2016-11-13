"use strict";

import {
    ajaxRequester as requester
} from "../utils/requester.js";

class Data {
    constructor() {
        this.url = "/api/data"; 
    }

    getAll() {
        return requester.getJSON(this.url);
    }

    register(user){
        console.log(user);   
    }
}

let data = new Data();
export {
    data
}