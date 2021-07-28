import { Router } from "express";
import { commentController } from "./comment.controller";
import * as passport from "passport";
class CommentRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router
      .route("/")
      .get(
        passport.authenticate("jwt", { session: false }),
        commentController.getList
      );
    this.router
      .route("/:id")
      .get(
        passport.authenticate("jwt", { session: false }),
        commentController.getByIdCar
      );
    this.router
      .route("/")
      .post(
        passport.authenticate("jwt", { session: false }),
        commentController.create
      );
  }
}

const commentRouter = new CommentRouter();

export const commentRoutes = commentRouter.router;
