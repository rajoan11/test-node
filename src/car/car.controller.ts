import { Request, Response } from "express";
import { ControllerRead } from "../common/controller/controller-read.interface";
import { ControllerWrite } from "../common/controller/controller-write.interface";
import { Car } from "./car.model";
import { carService } from "./car.service";

const notImplemented = "Method not implemented.";

class CarController implements ControllerRead, ControllerWrite {
  getList(req: Request, res: Response): void {
    carService
      .getList()
      .then((response: Partial<Car>[]) => res.status(200).json(response))
      .catch((err) => res.status(500).json(err));
  }

  getById(req: Request, res: Response): void {
    carService
      .getById(req.params.id)
      .then((response: Car | null) => res.status(200).json(response))
      .catch((err) => res.status(500).json(err));
  }

  create(req: Request, res: Response): void {
    carService
      .create(req.body)
      .then((response) => res.status(200).json(response))
      .catch((err) => res.status(500).json(err));
  }

  delete(req: Request, res: Response): void {
    carService
      .delete(req.params.id)
      .then((response) => res.status(200).json(response))
      .catch((err) => res.status(500).json(err));
  }

  update(req: Request, res: Response): void {
    carService
      .update(req.body)
      .then((response) => res.status(200).json(response))
      .catch((err) => res.status(500).json(err));
  }
  partialUpdate(req: Request, res: Response): void {
    carService
      .partialUpdate(req.params.id, req.body)
      .then((response) => res.status(200).json(response))
      .catch((err) => res.status(500).json(err));
  }
}

export const carController = new CarController();
