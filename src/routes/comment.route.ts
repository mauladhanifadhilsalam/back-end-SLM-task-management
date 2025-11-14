import { Router } from "express";
import {
  getComments,
  getCommentById,
  insertComment,
  updateComment,
  deleteCommentById,
} from "../controllers/comment.controller";

const router = Router();

router.get("/", getComments);
router.get("/:id", getCommentById);
router.post("/", insertComment);
router.patch("/:id", updateComment);
router.delete("/:id", deleteCommentById);

export default router;
