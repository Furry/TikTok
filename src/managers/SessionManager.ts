// This is to keep track of a persistant session.
export default class SessionManager {
    // Unknown
    private iid = "7032178962219501317"
    
    // Unknown how this is obtained
    private device_id = "7032178946520335877";

    // Wifi if connected to wifi, celular otherwise. Should be fine to keep it as wifi constantly.
    private ac: "wifi" | "celular" = "wifi";

    // Only tested on an android, so i'm unsure of others.
    private channel: "googleplay" = "googleplay";

    private aid = "1233"
    private app_name = "musical_ly";
    private version_code = "220005";
    private version_name = "22.0.5";
    private device_platform: "android" = "android"

    // Seems to sync up with version name.
    private ab_version = this.version_name;

    // Unknown
    private ssmix = "a"

    private device_type = "G011A"
    private device_brand = "google"

    private language = "en";
    private os_api = "25";
    private os_version = "7.1.2";
    private openudid = "19a94cbb9653c717";
    private manifest_version_code = "2022200050";
    private resolution = "720*1280"; // Width * Height
    private dpi = "240";
    private update_version_code = "2022200050";

    // Unknown
    private _rticket = "1637308170966"

    private current_region = "US";
    private app_type = "normal";
    private sys_region = "US";
    private mcc_mnc = "31004";
    private timezone_name = "Asia/Shanghai";
    private residence = "US";

    // Unknown
    private ts = "1637308170"

    private timezone_offset = "28800";
    private build_number = "22.0.5";
    private region = "US";

    // Unknown
    private uoo = "0"

    private app_language = this.language;
    private carrier_region = "US";
    private locale = "en";
    private op_region = "US"
    private ac2 = "wifi";

    // Unknown
    private cdid = "REDACTED";


    // HEADERS //
    private UserAgent = "com.zhiliaoapp.musically/2022200050 (Linux; U; Android 7.1.2; en; G011A; Build/N2G48H;tt-ok/3.10.0.2)";

    private Passport__Sdk__Version = "19";
    private Sdk__Version = "2";

    // Anti Spam Params?
    private X__Ladon = "REDACTED";
    private X__Argus = "REDACTED"


    constructor(username: string, password: string) {}

    public get baseQueryParams() {
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
        }
    }

    public get baseHeaders() {
        return {
            "User-Agent": this.UserAgent,

            "Passport-Sdk-Version": this.Passport__Sdk__Version,
            "Sdk-Version": this.Sdk__Version,

            "X-Ladon": this.X__Ladon,
            "X-Argus": this.X__Argus
        }
    }


}