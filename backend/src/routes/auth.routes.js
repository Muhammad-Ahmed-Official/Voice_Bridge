import { Router } from "express";
import { signIn, signUp, updatePreferences, searchUser, changePassword, forgotPassword, resetPassword } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.route("/signup").post(signUp);
authRouter.route("/signin").post(signIn);
authRouter.route("/forgot-password").post(forgotPassword);
authRouter.route("/reset-password").post(resetPassword);
authRouter.route("/change-password").post(changePassword);
// Update simple user preferences (e.g. ElevenLabs voice cloning toggle)
authRouter.route("/preferences").patch(updatePreferences);

// Search user by userId string (used to start a new Bridge Messenger conversation)
authRouter.route("/users/search").get(searchUser);

export default authRouter;