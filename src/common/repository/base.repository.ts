import * as mongoose from "mongoose";
import { RepositoryRead } from "./repository-read.interface";
import { RepositoryWrite } from "./repository-write.interface";

export abstract class BaseRepository<T extends mongoose.Document>
  implements RepositoryRead<T>, RepositoryWrite<T>
{
  private model: mongoose.Model<T>;

  constructor(schemaModel: mongoose.Model<T>) {
    this.model = schemaModel;
  }

  async find(conditions: Partial<T>): Promise<T[]> {
    return await this.model.find(conditions as mongoose.FilterQuery<T>);
  }

  async findBy(conditions: Object): Promise<T[]> {
    return await this.model.find(conditions as mongoose.FilterQuery<T>);
  }

  async findById(id: string): Promise<T | null> {
    return await this.model.findById(id);
  }

  async findOne(conditions: Partial<T>): Promise<T | null> {
    return await this.model.findOne(conditions as mongoose.FilterQuery<T>);
  }

  async create(item: T): Promise<T> {
    return await this.model.create(item);
  }

  async delete(id: string): Promise<boolean> {
    await this.model.deleteOne({ _id: id } as mongoose.FilterQuery<T>);

    return true;
  }

  async update(item: T): Promise<T> {
    return await this.model
      .updateOne(
        { _id: item._id } as mongoose.FilterQuery<T>,
        item as unknown as mongoose.UpdateQuery<T>
      )
      .then(() => item);
  }

  async partialUpdate(id: string, partial: Partial<T>): Promise<T | null> {
    const res = await this.model.findByIdAndUpdate(
      id as mongoose.FilterQuery<T>,
      partial as mongoose.UpdateQuery<T>
    );
    if (res) {
      return await this.model.findById(id);
    } else {
      return Promise.reject("error, wrong id passed on parameter");
    }
  }

  async findAndSort(conditions: Partial<T>, criteria: string): Promise<T[]> {
    return await this.model
      .find(conditions as mongoose.FilterQuery<T>)
      .sort({ name: criteria });
  }
}
