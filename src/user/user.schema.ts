import * as mongoose from "mongoose";
import { User } from "./user.model";
import * as bcrypt from "bcrypt";

const schema = new mongoose.Schema<User>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  adresse: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

schema.pre<User>("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } else {
    next();
  }
});

schema.methods.validPassword = function (password: string): boolean {
  return bcrypt.compareSync(password, this.password);
};

export const userSchema = mongoose.model<User>("User", schema);
