import { Router } from "express";
import { getUser, login } from "./../controllers/auth.controller";
import requireAuth from "../middleware/requireAuth";

const router = Router();

router.post("/login", login);

router.get("/profile", requireAuth, getUser)

export default router;
