"use strict";

function getJSON(url) {
    return new Promise((resolve, reject) => {
        $.getJSON(url, (data) => {
            resolve(data);
        });
    });
}

class Data {
    constructor() {
        this.url = "../data/db.json";
    }

    getAll() {
        return getJSON(this.url);
    }
}

let data = new Data();
export {
    data
}