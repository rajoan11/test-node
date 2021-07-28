import * as mongoose from "mongoose";
import { Comment } from "./comment.model";

const schema = new mongoose.Schema<Comment>({
  idCar: {
    type: String,
    required: true,
  },
  idUser: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  dateCreation: {
    type: Date,
    required: true,
  },
});

export const commentSchema = mongoose.model<Comment>("Comment", schema);
