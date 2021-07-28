import * as mongoose from "mongoose";

export interface Comment extends mongoose.Document {
  idCar: string;
  idUser: string;
  comment: string;
  dateCreation: string;
}
