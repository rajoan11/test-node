import * as mongoose from "mongoose";

export interface Car extends mongoose.Document {
  matriculation: string;
  brand: string;
  carModel: string;
  color: string;
  fuel: string;
  seats: number;
  doors: number;
  releaseYears: Date;
  photo: string;
}
