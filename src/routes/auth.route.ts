import { Router } from "express";
import {
  getUser,
  login,
  refreshAccessToken,
  logout,
} from "./../controllers/auth.controller";
import requireAuth from "../middleware/requireAuth";

const router = Router();

router.post("/login", login);
router.post("/refresh", refreshAccessToken);
router.post("/logout", logout);
router.get("/profile", requireAuth, getUser);

export default router;
