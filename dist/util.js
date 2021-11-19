"use strict";
// This file is just for general utility functions and types.
Object.defineProperty(exports, "__esModule", { value: true });
exports.toQueryString = void 0;
// Create a function that turns an object into a Query String.
function toQueryString(obj) {
    const queryStr = Object.keys(obj).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`).join("&");
    if (queryStr.length > 0) {
        return "?" + queryStr;
    }
    else {
        return "";
    }
}
exports.toQueryString = toQueryString;
