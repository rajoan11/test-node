import { Router } from "express";

import { userRoutes } from "../user/user.routes";
import { authenticationRoutes } from "../authentication/authentication.routes";
import { carRoutes } from "../car/car.route";
import { commentRoutes } from "../comment/comment.route";

class AppRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    /**
     * @openapi
     * /:
     *   get:
     *     description: test API
     *     responses:
     *       200:
     *         description: return API is OK.
     */
    this.router.get("/api-status", (req, res) =>
      res.json({ status: "API is OK" })
    );
    this.router.use("/user", userRoutes);
    this.router.use("/", authenticationRoutes);
    this.router.use("/car", carRoutes);
    this.router.use("/comment", commentRoutes);
  }
}

const appRouter = new AppRouter();
export const appRoutes = appRouter.router;
