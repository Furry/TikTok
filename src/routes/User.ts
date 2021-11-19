import Request from "../managers/Request";
import SessionManager from "../managers/SessionManager";

export class User {
    private sessionManager;
    constructor(sessionManager: SessionManager) {
        this.sessionManager = sessionManager
    }

    public getUser(userId: string) {
        return new Request(this.sessionManager)
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