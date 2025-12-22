import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import {
  changePasswordSchema,
  userQuerySchema,
  userResponseSchema,
  userSchema,
  userUpdateSchema,
} from "../../schemas/user.schema";
import { messageResponseSchema, buildPaginatedResponseSchema } from "../helpers";

function registerUserPaths(registry: OpenAPIRegistry) {
  const idParamSchema = z.object({
    id: z.coerce.number().int().positive(),
  });

  const paginatedUserResponseSchema = buildPaginatedResponseSchema(userResponseSchema);

  registry.registerPath({
    method: "get",
    path: "/users",
    tags: ["Users"],
    summary: "List users",
    description:
      "Accessible to admins and project managers. Supports pagination, sorting, and search.",
    request: {
      query: userQuerySchema,
    },
    responses: {
      200: {
        description: "Users fetched successfully.",
        content: {
          "application/json": { schema: paginatedUserResponseSchema },
        },
      },
      400: { description: "Invalid query parameters." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
    },
  });

  registry.registerPath({
    method: "get",
    path: "/users/{id}",
    tags: ["Users"],
    summary: "Fetch a user by id",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "User found.",
        content: {
          "application/json": { schema: userResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
      404: { description: "User not found." },
    },
  });

  registry.registerPath({
    method: "post",
    path: "/users",
    tags: ["Users"],
    summary: "Create a new user",
    request: {
      body: {
        required: true,
        content: {
          "application/json": { schema: userSchema },
        },
      },
    },
    responses: {
      201: {
        description: "User created.",
        content: {
          "application/json": { schema: userResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
      409: { description: "Email already exists." },
    },
  });

  registry.registerPath({
    method: "patch",
    path: "/users/{id}",
    tags: ["Users"],
    summary: "Update a user",
    request: {
      params: idParamSchema,
      body: {
        required: true,
        content: {
          "application/json": { schema: userUpdateSchema },
        },
      },
    },
    responses: {
      200: {
        description: "User updated.",
        content: {
          "application/json": { schema: userResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
      404: { description: "User not found." },
      409: { description: "Email already exists." },
    },
  });

  registry.registerPath({
    method: "delete",
    path: "/users/{id}",
    tags: ["Users"],
    summary: "Delete a user",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "User deleted.",
        content: {
          "application/json": { schema: messageResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
      404: { description: "User not found." },
    },
  });

  registry.registerPath({
    method: "post",
    path: "/users/change-password",
    tags: ["Users"],
    summary: "Change the authenticated user's password",
    request: {
      body: {
        required: true,
        content: {
          "application/json": { schema: changePasswordSchema },
        },
      },
    },
    responses: {
      200: {
        description: "Password updated successfully.",
        content: {
          "application/json": { schema: messageResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Current password incorrect or user not found." },
    },
  });
}

export { registerUserPaths };
