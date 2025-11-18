import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  insertUser,
  updateUser,
  deleteUserById,
  changePassword,
} from "../controllers/user.controller";
import requireRole from "../middleware/requireRole";
import { RoleType } from "@prisma/client";

const router = Router();

router.post("/change-password", changePassword);

router.use(requireRole(RoleType.ADMIN));
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", insertUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUserById);

export default router;
