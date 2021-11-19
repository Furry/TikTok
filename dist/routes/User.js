"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Request_1 = __importDefault(require("../managers/Request"));
class User {
    constructor(sessionManager) {
        this.sessionManager = sessionManager;
    }
    getUser(userId) {
        return new Request_1.default(this.sessionManager)
            .setRoute("user/profile/other/")
            .addQueryParameters({
            "sec_user_id": userId,
            "with_mutual": true,
            "address_book_access": 1,
            "from": 0,
            "user_avatar_shrink": "188_188",
            "user_cover_shrink": "750_422"
        }).send();
    }
}
exports.User = User;
