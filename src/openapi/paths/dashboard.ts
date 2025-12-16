import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import {
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
}

export { registerDashboardPaths };
