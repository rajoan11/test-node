import * as express from "express";
import * as helmet from "helmet";
import * as morgan from "morgan";
import { Server } from "http";
import * as appRoot from "app-root-path";
import * as cors from "cors";

import passport from "./app.authentication";
import { logger, morganStream } from "./app.logger";
import { appRoutes } from "./app.routes";
// import * as swaggerJSDoc from "swagger-jsdoc";
import swaggerDocument = require("../../swagger.json");
import * as swaggerUi from "swagger-ui-express";

export class App {
  private app: express.Application;

  constructor() {
    this.app = express();
  }

  public init(port: number): Server {
    this.initMiddlewares();
    this.initRoutes();
    this.initStatics();

    return this.app.listen(port, () => {
      logger.info(`app started, listening on port ${port}`);
    });
  }

  private initMiddlewares() {
    this.app.use(cors());
    this.app.use(passport.initialize());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("combined", { stream: morganStream }));
  }

  private initRoutes() {
    this.app.use("/api/v1", appRoutes);
    // const options = {
    //   definition: {
    //     openapi: "3.0.0",
    //     info: {
    //       title: "API TEST",
    //       version: "1.0.0",
    //     },
    //   },
    //   apis: [
    //     "./app.routes.ts",
    //     ".src/app/car/car.route.ts",
    //     ".src/app/car/user.route.ts",
    //     ".src/app/car/authentication.route.ts",
    //   ],
    // };
    // const swaggerSpec = swaggerJSDoc(options);
    this.app.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );

    // this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }

  private initStatics() {
    // initilize front-end static files serving:
    this.app.use(express.static(`${appRoot}/medias`));
    this.app.use(express.static(`${appRoot}/public`));
  }
}

export const app = new App();
