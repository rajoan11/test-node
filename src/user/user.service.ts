import { ServiceRead } from "../common/service/service-read.interface";
import { ServiceWrite } from "../common/service/service-write.interface";
import { User } from "./user.model";
import { userRepository } from "./user.repository";
import * as bcrypt from "bcrypt";
import * as nodemailer from "nodemailer";
import * as ejs from "ejs";
import * as appRoot from "app-root-path";
import { logger } from "../app/app.logger";
import { APIText } from "../common/api-text";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "alfortville.app@gmail.Com",
    pass: "alfort123",
  },
  tls: { rejectUnauthorized: false },
});

const notImplemented = "Method not implemented.";

class UserService implements ServiceRead<User>, ServiceWrite<User> {
  async getList(): Promise<(Partial<User> | User)[]> {
    const users = await userRepository.find({});

    return users.map(({ _id, email, firstname, lastname, adresse }) => ({
      _id,
      email,
      firstname,
      lastname,
      adresse,
    }));
  }

  async getById(id: string): Promise<User | null> {
    return await userRepository.findById(id);
  }

  async create(item: User): Promise<User> {
    return await userRepository.create(item);
  }

  async delete(id: string): Promise<boolean> {
    return await userRepository.delete(id);
  }

  async update(item: User): Promise<User> {
    return await userRepository.update(item);
  }
  async partialUpdate(id: string, item: Partial<User>): Promise<User | null> {
    return await userRepository.partialUpdate(id, item);
  }
}

export const userService = new UserService();
