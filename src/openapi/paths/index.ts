import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { registerAuthPaths } from "./auth";
import { registerUserPaths } from "./users";
import { registerProjectOwnerPaths } from "./projectOwners";
import { registerProjectPhasePaths } from "./projectPhases";
import { registerProjectPaths } from "./projects";
import { registerProjectUpdatePaths } from "./projectUpdates";
import { registerTicketPaths } from "./tickets";
import { registerCommentPaths } from "./comments";
import { registerAttachmentPaths } from "./attachments";
import { registerProjectAssignmentPaths } from "./projectAssignments";
import { registerProjectRolePaths } from "./projectRoles";
import { registerTicketAssigneePaths } from "./ticketAssignees";
import { registerNotificationPaths } from "./notifications";
import { registerActivityLogPaths } from "./activityLogs";
import { registerDashboardPaths } from "./dashboard";
import { registerTeamUpdatePaths } from "./teamUpdates";

function registerOpenApiPaths(registry: OpenAPIRegistry) {
  registerAuthPaths(registry);
  registerUserPaths(registry);
  registerProjectOwnerPaths(registry);
  registerProjectPhasePaths(registry);
  registerProjectPaths(registry);
  registerProjectUpdatePaths(registry);
  registerTicketPaths(registry);
  registerCommentPaths(registry);
  registerAttachmentPaths(registry);
  registerProjectAssignmentPaths(registry);
  registerProjectRolePaths(registry);
  registerTicketAssigneePaths(registry);
  registerNotificationPaths(registry);
  registerActivityLogPaths(registry);
  registerDashboardPaths(registry);
  registerTeamUpdatePaths(registry);
}

export { registerOpenApiPaths };
