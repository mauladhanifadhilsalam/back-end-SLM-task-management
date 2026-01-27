import { OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";
import { registry } from "./registry";
import { registerOpenApiPaths } from "./paths";

let pathsRegistered = false;

function ensurePathsRegistered() {
  if (!pathsRegistered) {
    registerOpenApiPaths(registry);
    pathsRegistered = true;
  }
}

function buildOpenApiDocument() {
  ensurePathsRegistered();
  const generator = new OpenApiGeneratorV3(registry.definitions);
  return generator.generateDocument({
    openapi: "3.0.3",
    info: {
      title: "SLM Project Management API",
      version: "1.0.0",
      description: "Generated automatically from Zod schemas and route metadata.",
    },
    servers: [{ url: "/api" }],
    security: [{ bearerAuth: [] }],
  });
}

export { buildOpenApiDocument };
