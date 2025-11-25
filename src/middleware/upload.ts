import multer from "multer";
import path from "path";
import fs from "fs";
import env from "../config/env";

const uploadDir = env.uploadDir;
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const safeExt = path.extname(file.originalname);
    const base = path.basename(file.originalname, safeExt).replace(/\s+/g, "_");
    cb(null, `${Date.now()}-${base}${safeExt}`);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});
