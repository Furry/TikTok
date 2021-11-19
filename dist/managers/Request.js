"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GotClient = __importStar(require("got"));
const util_1 = require("../util");
const CDNManager_1 = __importDefault(require("./CDNManager"));
class Request {
    constructor(sessionManager) {
        this._route = "";
        this._method = "GET";
        this._queryParams = {};
        this._headers = {};
        this._queryParams = { ...sessionManager.baseQueryParams };
        this._headers = { ...sessionManager.baseHeaders };
    }
    setRoute(route) {
        this._route = route;
        return this;
    }
    setMethod(method) {
        this._method = method;
        return this;
    }
    setQueryParameters(params) {
        this._queryParams = params;
        return this;
    }
    addQueryParameters(params) {
        this._queryParams = { ...params, ...this._queryParams };
        return this;
    }
    setHeaders(headers) {
        this._headers = headers;
        return this;
    }
    addHeaders(headers) {
        this._headers = { ...this._headers, ...headers };
        return this;
    }
    async send() {
        console.log("Req to: " + CDNManager_1.default.domain + CDNManager_1.default.apiRoot + this._route + (0, util_1.toQueryString)(this._queryParams));
        const res = await GotClient.default(CDNManager_1.default.domain + CDNManager_1.default.apiRoot + this._route + (0, util_1.toQueryString)(this._queryParams), {
            headers: this._headers
        });
        if (res.body == "") {
            console.error("Request Failed.. ;w;");
            return {};
        }
        else {
            return JSON.parse(res.body);
        }
    }
}
exports.default = Request;
