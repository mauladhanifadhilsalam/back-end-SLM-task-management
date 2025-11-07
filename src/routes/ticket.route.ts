import { Router } from "express";
import {
  getAllTickets,
  getTicketById,
  insertTicket,
  updateTicket,
  deleteTicketById,
} from "../controllers/ticket.controller";

const router = Router();

router.get("/", getAllTickets);
router.get("/:id", getTicketById);
router.post("/", insertTicket);
router.patch("/:id", updateTicket);
router.delete("/:id", deleteTicketById);

export default router;
