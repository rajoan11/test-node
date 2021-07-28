import * as mongoose from "mongoose";

export abstract class CustomRepository<T extends mongoose.Document> {
  private model: mongoose.Model<T>;

  constructor(schemaModel: mongoose.Model<T>) {
    this.model = schemaModel;
  }

  async deleteBy(item: Object): Promise<boolean> {
    await this.model.remove(item);

    return true;
  }
}
