import { Router } from "express";
import { handleMetricsRequest } from "../metrics";

const router = Router();

router.get("/", handleMetricsRequest);

export default router;
