"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SessionManager_1 = __importDefault(require("./managers/SessionManager"));
const User_1 = require("./routes/User");
const sessionManager = new SessionManager_1.default("test", "test");
const UserRoute = new User_1.User(sessionManager);
UserRoute.getUser("MS4wLjABAAAARMvIL_--uE_qggA-JCBljI5_6NEB6MfUpkV0B3-DKihnY3kiQ5RkkErylImwgsV4")
    .then((user) => {
    console.log(user);
});
