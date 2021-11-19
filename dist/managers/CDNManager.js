"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Dynamic configuration for the closest CDN. This is probably good to have, as they likeyl use geolocation as a anti-bot measurement.
class CDNManager {
    static get primary() {
        return "api22-core-c-useast1a";
    }
    static get domain() {
        return `https://${this.primary}.tiktokv.com/`;
    }
}
exports.default = CDNManager;
CDNManager.apiRoot = "aweme/v1/";
