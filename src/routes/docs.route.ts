import Router from "express";
import swaggerUi, { SwaggerUiOptions } from "swagger-ui-express";
import swaggerDocument from "../../docs/swagger/SLM-project-management-api.spec.json";

const router = Router();

const swaggerOptions: SwaggerUiOptions = {
  explorer: true,
  customCssUrl: "/docs/swagger/custom.css"

};

router.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, swaggerOptions),
);

export default router;
