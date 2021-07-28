import * as mongoose from "mongoose";

export interface User extends mongoose.Document {
  email: string;
  lastname: string;
  firstname: string;
  adresse: string;
  password: string;
  validPassword: (p: string) => Promise<boolean>;
}
