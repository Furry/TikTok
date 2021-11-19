// Dynamic configuration for the closest CDN. This is probably good to have, as they likeyl use geolocation as a anti-bot measurement.
export default class CDNManager {
    public static apiRoot = "aweme/v1/";

    public static get primary(): string {
        return "api22-core-c-useast1a";
    }
    
    public static get domain(): string {
        return `https://${this.primary}.tiktokv.com/`;
    }
}