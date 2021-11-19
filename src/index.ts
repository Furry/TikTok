import SessionManager from "./managers/SessionManager";
import { User } from "./routes/User";

const sessionManager = new SessionManager("test", "test");
const UserRoute = new User(sessionManager);

UserRoute.getUser("MS4wLjABAAAARMvIL_--uE_qggA-JCBljI5_6NEB6MfUpkV0B3-DKihnY3kiQ5RkkErylImwgsV4")
.then((user) => {
    console.log(user)
})