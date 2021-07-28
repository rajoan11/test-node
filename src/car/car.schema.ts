import * as mongoose from "mongoose";
import { Car } from "./car.model";

const schema = new mongoose.Schema<Car>({
  matriculation: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  carModel: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  fuel: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  doors: {
    type: Number,
    required: true,
  },
  releaseYears: {
    type: Date,
    required: true,
  },

  photo: {
    type: String,
    required: true,
  },
});

export const carSchema = mongoose.model<Car>("Car", schema);
