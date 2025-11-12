import { Router } from "express";
import {
  getAttachments,
  addAttachment,
  deleteAttachmentById,
} from "../controllers/attachment.controller";
import { upload } from "../middleware/upload";

const router = Router();

router.get("/", getAttachments);
router.post("/", upload.single("file"), addAttachment);
router.delete("/:id", deleteAttachmentById);

export default router;
