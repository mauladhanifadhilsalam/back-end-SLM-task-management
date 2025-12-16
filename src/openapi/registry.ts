import { z } from "zod";
import { extendZodWithOpenApi, OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

const registry = new OpenAPIRegistry();

registry.registerComponent("securitySchemes", "bearerAuth", {
  type: "http",
  scheme: "bearer",
  bearerFormat: "JWT",
});

function registerSchema<T extends z.ZodTypeAny>(name: string, schema: T): T {
  registry.register(name, schema);
  return schema;
}

export { registry, registerSchema };
