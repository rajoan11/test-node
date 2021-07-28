import { Request, Response } from "express";
import { ControllerRead } from "../common/controller/controller-read.interface";
import { ControllerWrite } from "../common/controller/controller-write.interface";
import { Comment } from "./comment.model";
import { commentService } from "./comment.service";

const notImplemented = "Method not implemented.";

class CommentController {
  getList(req: Request, res: Response): void {
    commentService
      .getList()
      .then((response: Partial<Comment>[]) => res.status(200).json(response))
      .catch((err) => res.status(500).json(err));
  }

  getByIdCar(req: Request, res: Response): void {
    commentService
      .getByIdCar(req.params.id)
      .then((response: Comment[] | null) => res.status(200).json(response))
      .catch((err) => res.status(500).json(err));
  }

  create(req: Request, res: Response): void {
    commentService
      .create(req.body)
      .then((response) => res.status(200).json(response))
      .catch((err) => res.status(500).json(err));
  }
}

export const commentController = new CommentController();
