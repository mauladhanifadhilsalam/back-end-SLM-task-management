import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import {
  dailyCadenceEntrySchema,
  developerDashboardListSchema,
  projectManagerDashboardSchema,
} from "../../schemas/dashboard.schema";

function registerDashboardPaths(registry: OpenAPIRegistry) {
  registry.registerPath({
    method: "get",
    path: "/dashboard/developer",
    tags: ["Dashboard"],
    summary: "Developer dashboard",
    description:
      "Requires `RoleType.DEVELOPER`. Returns an array containing the developer's metrics.",
    responses: {
      200: {
        description: "Dashboard data found.",
        content: {
          "application/json": { schema: developerDashboardListSchema },
        },
      },
      401: { description: "Unauthorized." },
      403: { description: "Forbidden for non-developers." },
      404: { description: "Dashboard not found." },
    },
  });

  registry.registerPath({
    method: "get",
    path: "/dashboard/project-manager",
    tags: ["Dashboard"],
    summary: "Project manager dashboard",
    description: "Requires `RoleType.PROJECT_MANAGER`.",
    responses: {
      200: {
        description: "Dashboard data found.",
        content: {
          "application/json": { schema: projectManagerDashboardSchema },
        },
      },
      401: { description: "Unauthorized." },
      403: { description: "Forbidden for non-project-managers." },
      404: { description: "Dashboard not found." },
    },
  });

  registry.registerPath({
    method: "get",
    path: "/dashboard/project-manager/dev-stat",
    tags: ["Dashboard"],
    summary: "Developer stats for project managers",
    description: "Requires `RoleType.PROJECT_MANAGER`.",
    responses: {
      200: {
        description: "Developer dashboards fetched.",
        content: {
          "application/json": { schema: developerDashboardListSchema },
        },
      },
      401: { description: "Unauthorized." },
      403: { description: "Forbidden for non-project-managers." },
      404: { description: "Dashboards not found." },
    },
  });

  const projectIdParamSchema = z.object({
    projectId: z.coerce.number().int().positive(),
  });

  registry.registerPath({
    method: "get",
    path: "/dashboard/project-manager/daily-cadence/{projectId}",
    tags: ["Dashboard"],
    summary: "Daily cadence dashboard",
    description: "Requires `RoleType.PROJECT_MANAGER`.",
    request: {
      params: projectIdParamSchema,
    },
    responses: {
      200: {
        description: "Daily cadence data found.",
        content: {
          "application/json": { schema: dailyCadenceEntrySchema },
        },
      },
      400: { description: "Invalid project id." },
      401: { description: "Unauthorized." },
      403: { description: "Forbidden for non-project-managers." },
      404: { description: "Daily cadence not found." },
    },
  });
}

export { registerDashboardPaths };
