import { ServiceRead } from "../common/service/service-read.interface";
import { ServiceWrite } from "../common/service/service-write.interface";

import { commentRepository } from "./comment.repository";
import { Comment } from "./comment.model";

const notImplemented = "Method not implemented.";

class CommentService {
  async getList(): Promise<Partial<Comment>[]> {
    return await commentRepository.find({});
  }

  async getByIdCar(idCar: string): Promise<Comment[] | null> {
    return await commentRepository.find({ idCar });
  }

  async create(item: Comment): Promise<Comment> {
    return await commentRepository.create(item);
  }
}

export const commentService = new CommentService();
