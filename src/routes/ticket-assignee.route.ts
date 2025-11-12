import { Router } from "express";
import {
  getTicketAssignees,
  addTicketAssignee,
  removeTicketAssignee,
} from "../controllers/ticket-assignee.controller";

const router = Router();

router.get("/", getTicketAssignees);
router.post("/", addTicketAssignee);
router.delete("/:id", removeTicketAssignee);

export default router;
