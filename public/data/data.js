"use strict";

function requester(url) {
    return new Promise((resolve, reject) => {
        $.getJSON(url, (data) => {
            resolve(data);
        });
    });
}

function adder(url, data) {
    data = JSON.stringify(data);
    
    return new Promise((resolve, reject) => {
        $.post(url, data, function (res) {
            resolve(res);
        }, "json");
    });
}

class Data {
    constructor() {
        this.url = "../data/db.json";
    }

    getAll() {
        return requester(this.url);
    }
}

let data = new Data();
export {
    data
}