import * as GotClient from "got";
import { AbstractObject, toQueryString } from "../util";
import CDNManager from "./CDNManager";
import SessionManager from "./SessionManager";

export default class Request {
    private _route = "";
    private _method: GotClient.Method = "GET";
    private _queryParams = {};
    private _headers = {};

    constructor(sessionManager: SessionManager) {
        this._queryParams = { ...sessionManager.baseQueryParams };
        this._headers = { ...sessionManager.baseHeaders };
    }

    public setRoute(route: string): Request {
        this._route = route;
        return this;
    }

    public setMethod(method: GotClient.Method): Request {
        this._method = method;
        return this;
    }

    public setQueryParameters(params: AbstractObject): Request {
        this._queryParams = params;
        return this;
    }

    public addQueryParameters(params: AbstractObject): Request {
        this._queryParams = { ...params, ...this._queryParams };
        return this;
    }

    public setHeaders(headers: AbstractObject): Request {
        this._headers = headers;
        return this;
    }

    public addHeaders(headers: AbstractObject): Request {
        this._headers = { ...this._headers, ...headers };
        return this;
    }

    public async send(): Promise<AbstractObject> {
        console.log("Req to: " + CDNManager.domain + CDNManager.apiRoot + this._route + toQueryString(this._queryParams));
        const res = await GotClient.default(CDNManager.domain + CDNManager.apiRoot + this._route + toQueryString(this._queryParams), {
            headers: this._headers
        })
        if (res.body == "") {
            console.error("Request Failed.. ;w;")
            return {};
        } else {
            return JSON.parse(res.body);
        }
    }
}