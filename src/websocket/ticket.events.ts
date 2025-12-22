import { getSocketServer, projectRoom } from "./socket";
import type { TicketWithRelations } from "../services/ticket.service";

type TicketEventPayload =
  | {
      type: "ticket:created" | "ticket:updated";
      ticket: TicketWithRelations;
    }
  | {
      type: "ticket:deleted";
      ticketId: number;
    };

function emitTicketEvent(projectId: number, payload: TicketEventPayload) {
  const io = getSocketServer();
  if (!io) {
    return;
  }
  io.to(projectRoom(projectId)).emit(payload.type, payload);
}

export function emitTicketCreated(ticket: TicketWithRelations) {
  emitTicketEvent(ticket.projectId, { type: "ticket:created", ticket });
}

export function emitTicketUpdated(ticket: TicketWithRelations) {
  emitTicketEvent(ticket.projectId, { type: "ticket:updated", ticket });
}

export function emitTicketDeleted(ticketId: number, projectId: number) {
  emitTicketEvent(projectId, { type: "ticket:deleted", ticketId });
}
