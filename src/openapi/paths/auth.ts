import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import {
  authProfileResponseSchema,
  authTokenResponseSchema,
  loginSchema,
  refreshTokenRequestSchema,
} from "../../schemas/auth.schema";

function registerAuthPaths(registry: OpenAPIRegistry) {
  const refreshHeaderSchema = z.object({
    "x-refresh-token": z.string().optional(),
  });

  registry.registerPath({
    method: "post",
    path: "/auth/login",
    tags: ["Auth"],
    summary: "Authenticate user credentials",
    security: [],
    request: {
      body: {
        required: true,
        content: {
          "application/json": { schema: loginSchema },
        },
      },
    },
    responses: {
      200: {
        description: "Valid credentials, returns a JWT access token.",
        content: {
          "application/json": { schema: authTokenResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Invalid credentials." },
    },
  });

  registry.registerPath({
    method: "post",
    path: "/auth/refresh",
    tags: ["Auth"],
    summary: "Exchange a refresh token for a new access token",
    description:
      "Accepts the refresh token via cookie, the `x-refresh-token` header, or the optional JSON body.",
    security: [],
    request: {
      headers: refreshHeaderSchema,
      body: {
        required: false,
        content: {
          "application/json": { schema: refreshTokenRequestSchema },
        },
      },
    },
    responses: {
      200: {
        description: "Access token successfully refreshed.",
        content: {
          "application/json": { schema: authTokenResponseSchema },
        },
      },
      401: { description: "Refresh token missing, expired, or revoked." },
    },
  });

  registry.registerPath({
    method: "post",
    path: "/auth/logout",
    tags: ["Auth"],
    summary: "Revoke refresh token and clear cookie",
    security: [],
    responses: {
      204: { description: "Refresh token cleared successfully." },
    },
  });

  registry.registerPath({
    method: "get",
    path: "/auth/profile",
    tags: ["Auth"],
    summary: "Retrieve authenticated user's profile",
    security: [{ bearerAuth: [] }],
    responses: {
      200: {
        description: "Current user's profile.",
        content: {
          "application/json": { schema: authProfileResponseSchema },
        },
      },
      401: { description: "Missing or invalid bearer token." },
    },
  });
}

export { registerAuthPaths };
