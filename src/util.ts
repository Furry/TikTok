// This file is just for general utility functions and types.

export type AbstractObject = {[key: string]: any};

// Create a function that turns an object into a Query String.
export function toQueryString(obj: AbstractObject): string {
    const queryStr = Object.keys(obj).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`).join("&");
    if (queryStr.length > 0) {
        return "?" + queryStr;
    } else {
        return "";
    }
}
