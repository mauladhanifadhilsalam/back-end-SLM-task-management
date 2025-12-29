import path from "path";
import { mkdir, writeFile } from "fs/promises";
import { buildOpenApiDocument } from "../openapi/document";

async function main() {
  const document = buildOpenApiDocument();
  const outputDir = path.resolve(__dirname, "../../docs/swagger");
  await mkdir(outputDir, { recursive: true });
  const outputPath = path.join(outputDir, "SLM-project-management-api.spec.json");
  await writeFile(outputPath, JSON.stringify(document, null, 2), "utf-8");
  const relativePath = path.relative(process.cwd(), outputPath);
  console.log(`OpenAPI spec generated at: ${relativePath}`);
}

main().catch((error) => {
  console.error("Failed to generate OpenAPI document:", error);
  process.exitCode = 1;
});
