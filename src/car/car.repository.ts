import { BaseRepository } from "../common/repository/base.repository";
import { carSchema } from "./car.schema";
import { Car } from "./car.model";

class UserRepository extends BaseRepository<Car> {
  constructor() {
    super(carSchema);
  }
}

export const carRepository = new UserRepository();
