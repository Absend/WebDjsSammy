"use strict";

import {
    notifier as notifier
} from "./notifier.js";

const constants = {
    username: {
        minLength: 6,
        maxLength: 30
    },
    password: {
        minLength: 6,
        maxLength: 30,
        allowedCharacters: "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"
    },
    material: {
        minLength: 6,
        maxLength: 100
    }
}

const checkForOtherSymbols = (stringg, chars) => {
    for (let i = 0; i < stringg.length; i += 1) {
        if (chars.indexOf(stringg.charAt(i)) < 0) {
            return false;
        }
    }

    return true;
};

const validator = {
    validateUsername: (username) => {
        if (typeof username !== 'string') {
            notifier.error("Username must be a string!");
        }

        if (username.length < constants.username.minLength || username.length > constants.username.maxLength) {
            notifier.error("Username must be between 6 and 30 characters!");
        }
    },
    validatePassword: (pass) => {
        if (typeof pass !== "string") {
             notifier.error("Password must be a string!");
        }

        if (pass.length < constants.password.minLength || pass.length > constants.password.maxLength) {
             notifier.error("Password must be between 6 and 30 characters!");
        }

        if (!checkForOtherSymbols(pass, constants.password.allowedCharacters)) {
             notifier.error("Password can contain only Latin letters, digits and the characters _ and .");
        }
    },
    validateMaterial: (material) => {
        if (typeof material.title !== "string" || typeof material.description !== "string") {
             notifier.error("Material title and description must be a string!");
        }

        if (material.title.length < constants.material.minLength || material.title.length > constants.material.maxLength) {
             notifier.error("Material must be between 6 and 30 characters!");
        }
    }
};

export { validator }