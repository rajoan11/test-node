import { Router } from 'express';
import { userController } from './user.controller';
import * as passport from 'passport';
class UserRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.route('/').get(userController.getList);
        this.router.route('/token').get(passport.authenticate('jwt', { session: false }), userController.getList);
        this.router.route('/:id').get(userController.getById);
        this.router.route('/').post(userController.create);
        this.router.route('/').put(userController.update);
        this.router.route('/:id').patch(userController.partialUpdate);
        this.router.route('/:id').delete(userController.delete);
    }
}

const userRouter = new UserRouter();

export const userRoutes = userRouter.router;
