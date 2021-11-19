"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This is to keep track of a persistant session.
class SessionManager {
    constructor(username, password) {
        // Unknown
        this.iid = "7032178962219501317";
        // Unknown how this is obtained
        this.device_id = "7032178946520335877";
        // Wifi if connected to wifi, celular otherwise. Should be fine to keep it as wifi constantly.
        this.ac = "wifi";
        // Only tested on an android, so i'm unsure of others.
        this.channel = "googleplay";
        this.aid = "1233";
        this.app_name = "musical_ly";
        this.version_code = "220005";
        this.version_name = "22.0.5";
        this.device_platform = "android";
        // Seems to sync up with version name.
        this.ab_version = this.version_name;
        // Unknown
        this.ssmix = "a";
        this.device_type = "G011A";
        this.device_brand = "google";
        this.language = "en";
        this.os_api = "25";
        this.os_version = "7.1.2";
        this.openudid = "19a94cbb9653c717";
        this.manifest_version_code = "2022200050";
        this.resolution = "720*1280"; // Width * Height
        this.dpi = "240";
        this.update_version_code = "2022200050";
        // Unknown
        this._rticket = "1637308170966";
        this.current_region = "US";
        this.app_type = "normal";
        this.sys_region = "US";
        this.mcc_mnc = "31004";
        this.timezone_name = "Asia/Shanghai";
        this.residence = "US";
        // Unknown
        this.ts = "1637308170";
        this.timezone_offset = "28800";
        this.build_number = "22.0.5";
        this.region = "US";
        // Unknown
        this.uoo = "0";
        this.app_language = this.language;
        this.carrier_region = "US";
        this.locale = "en";
        this.op_region = "US";
        this.ac2 = "wifi";
        // Unknown
        this.cdid = "b9078116-339f-4870-9780-dccf64cd583d";
        // HEADERS //
        this.UserAgent = "com.zhiliaoapp.musically/2022200050 (Linux; U; Android 7.1.2; en; G011A; Build/N2G48H;tt-ok/3.10.0.2)";
        this.Passport__Sdk__Version = "19";
        this.Sdk__Version = "2";
        // Anti Spam Params?
        this.X__Ladon = "KZqneHU8Q8JzLpRjd5MJBmIL13gPIkeTO8xSBXTtexJgQwlP";
        this.X__Argus = "y+c/ajbjuaTVJatYZz4uhP/iwWob770gvZ7eAdLxNkYuO6JccO7wHmNGvYyGK6swzI5R9oVXpTuWywTgyWVqV0vwp++kipKf1a6BNizNUKv9Q0b/cl1rS72rX5nhCBsYs+BQPGzzaRlqD4v58nPx3qXoiLaF5GMim0CTgTq/lkIrEEUabavHx/TKZ5J8qKBvG0mSmaOvX+YlOLCyCTOUBm9hcbaM0lljOSpbhXyTRIYo4pgNQdH8tTnG7YROLiTC8lkvmokVezDF9Rug+oUeIggiWax6DqOJI1OW+U/Vo4eI6LNHLgzqVvyalprklqMZL8Lmm9s5XjaHKJY2TI1ohrqdWc05TJGCFL0VMfLpVOcWpg==";
    }
    get baseQueryParams() {
        return {
            iid: this.iid,
            device_id: this.device_id,
            ac: this.ac,
            channel: this.channel,
            aid: this.aid,
            app_name: this.app_name,
            version_code: this.version_code,
            version_name: this.version_name,
            device_platform: this.device_platform,
            ab_version: this.ab_version,
            ssmix: this.ssmix,
            device_type: this.device_type,
            device_brand: this.device_brand,
            language: this.language,
            os_api: this.os_api,
            os_version: this.os_version,
            openudid: this.openudid,
            manifest_version_code: this.manifest_version_code,
            resolution: this.resolution,
            dpi: this.dpi,
            update_version_code: this.update_version_code,
            _rticket: this._rticket,
            current_region: this.current_region,
            app_type: this.app_type,
            sys_region: this.sys_region,
            mcc_mnc: this.mcc_mnc,
            timezone_name: this.timezone_name,
            residence: this.residence,
            ts: this.ts,
            timezone_offset: this.timezone_offset,
            build_number: this.build_number,
            region: this.region,
            uoo: this.uoo,
            app_language: this.app_language,
            carrier_region: this.carrier_region,
            locale: this.locale,
            op_region: this.op_region,
            ac2: this.ac2,
            cdid: this.cdid
        };
    }
    get baseHeaders() {
        return {
            "User-Agent": this.UserAgent,
            "Passport-Sdk-Version": this.Passport__Sdk__Version,
            "Sdk-Version": this.Sdk__Version,
            "X-Ladon": this.X__Ladon,
            "X-Argus": this.X__Argus
        };
    }
}
exports.default = SessionManager;
