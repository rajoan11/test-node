import { ServiceRead } from "../common/service/service-read.interface";
import { ServiceWrite } from "../common/service/service-write.interface";

import { carRepository } from "./car.repository";
import { Car } from "./car.model";

const notImplemented = "Method not implemented.";

class CarService implements ServiceRead<Car>, ServiceWrite<Car> {
  async getList(): Promise<Partial<Car>[]> {
    return await carRepository.find({});
  }

  async getById(id: string): Promise<Car | null> {
    return await carRepository.findById(id);
  }

  async create(item: Car): Promise<Car> {
    return await carRepository.create(item);
  }

  async delete(id: string): Promise<boolean> {
    return await carRepository.delete(id);
  }

  async update(item: Car): Promise<Car> {
    return await carRepository.update(item);
  }
  async partialUpdate(id: string, item: Partial<Car>): Promise<Car | null> {
    return await carRepository.partialUpdate(id, item);
  }
}

export const carService = new CarService();
