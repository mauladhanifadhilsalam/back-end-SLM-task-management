import { Router } from "express";
import { getUser, login, refreshAccessToken, logout } from "./../controllers/auth.controller";
import requireAuth from "../middleware/requireAuth";
import { loginRateLimiter } from "../middleware/rateLimit";

const router = Router();

router.post("/login", loginRateLimiter, login);
router.post("/refresh", refreshAccessToken);
router.post("/logout", logout);
router.get("/profile", requireAuth, getUser);

export default router;
