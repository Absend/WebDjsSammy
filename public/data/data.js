"use strict";

import {
    ajaxRequester as requester
} from "../utils/requester.js";

class Data {
    getData() {
        return requester.get("/api/data");
    }

    getUsers() {
        return requester.get("/api/users");
    }

    register(user){
        let options = {
            data: user
        };
        return requester.post("/api/newUser", options); 
    }
}

let data = new Data();
export {
    data
}