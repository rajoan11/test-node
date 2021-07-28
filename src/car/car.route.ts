import { Router } from "express";
import { carController } from "./car.controller";
import * as passport from "passport";
class CarRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.route("/").get(carController.getList);
    this.router.route("/:id").get(carController.getById);
    this.router.route("/").post(carController.create);
    this.router.route("/").put(carController.update);
    this.router.route("/:id").patch(carController.partialUpdate);
    this.router.route("/:id").delete(carController.delete);
  }
}

const carRouter = new CarRouter();

export const carRoutes = carRouter.router;
