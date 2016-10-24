"use strict";

function getJSON(url) {
    return new Promise((resolve, reject) => {
        $.getJSON(url, (data) => {
            resolve(data);
        });
    });
}

function setJSON(url, data) {
    return new Promise((resolve, reject) => {
        data = JSON.stringify(data);
        $.post(url, data, function (err) {
            assert(err);
        }, "json");
    });
}

class Data {
    constructor() {
        this.url = "../data/db.json";
    }

    getAll() {
        return getJSON(this.url);
    }

    saveAll(data){
        setJSON(this.url, data);
    }
}

let data = new Data();
export {
    data
}