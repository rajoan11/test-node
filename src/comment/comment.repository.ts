import { BaseRepository } from "../common/repository/base.repository";
import { commentSchema } from "./comment.schema";
import { Comment } from "./comment.model";

class UserRepository extends BaseRepository<Comment> {
  constructor() {
    super(commentSchema);
  }
}

export const commentRepository = new UserRepository();
