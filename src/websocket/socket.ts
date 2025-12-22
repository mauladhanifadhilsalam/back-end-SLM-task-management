import { Server as HttpServer } from "http";
import { Server as SocketIOServer, Socket, DefaultEventsMap } from "socket.io";
import jwt from "jsonwebtoken";
import { RoleType } from "@prisma/client";
import env from "../config/env";

type SocketUser = {
  id: number;
  role: RoleType;
};

type SocketData = {
  user?: SocketUser;
};

let io: SocketIOServer<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, SocketData> | null =
  null;

function extractToken(socket: Socket) {
  const authHeader = socket.handshake.headers["authorization"];
  if (typeof authHeader === "string") {
    const [scheme, token] = authHeader.split(" ");
    if (scheme === "Bearer" && token) {
      return token;
    }
  }
  const authToken = socket.handshake.auth?.token;
  if (typeof authToken === "string" && authToken.trim().length) {
    return authToken;
  }
  return null;
}

function authenticateSocket(socket: Socket, next: (err?: Error) => void) {
  const token = extractToken(socket);
  if (!token) {
    return next(new Error("Missing auth token"));
  }
  try {
    const decoded = jwt.verify(token, env.jwtSecret) as {
      sub?: string | number;
      role?: RoleType;
    };
    if (!decoded?.role) {
      return next(new Error("Invalid token"));
    }
    const isValidRole = (Object.values(RoleType) as string[]).includes(decoded.role);
    if (!isValidRole || decoded.sub === undefined) {
      return next(new Error("Invalid token"));
    }
    const userId = Number(decoded.sub);
    if (!Number.isFinite(userId)) {
      return next(new Error("Invalid token payload"));
    }
    socket.data.user = { id: userId, role: decoded.role };
    return next();
  } catch {
    return next(new Error("Invalid or expired token"));
  }
}

export function projectRoom(projectId: number) {
  return `project:${projectId}`;
}

export function initSocketServer(server: HttpServer) {
  io = new SocketIOServer<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, SocketData>(
    server,
    {
      cors: {
        origin: env.allowedOrigins,
        credentials: true,
      },
    },
  );

  io.use(authenticateSocket);

  io.on("connection", (socket) => {
    const viewer = socket.data.user;
    if (viewer) {
      socket.join(`user:${viewer.id}`);
    }

    socket.on("watchProject", (projectId: unknown) => {
      if (typeof projectId === "number" && Number.isInteger(projectId) && projectId > 0) {
        socket.join(projectRoom(projectId));
      }
    });

    socket.on("unwatchProject", (projectId: unknown) => {
      if (typeof projectId === "number" && Number.isInteger(projectId) && projectId > 0) {
        socket.leave(projectRoom(projectId));
      }
    });
  });

  return io;
}

export function getSocketServer() {
  return io;
}
