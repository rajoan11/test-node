import { Router } from 'express';
import { authenticationController } from './authentication.controller';

class AuthenticationRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.route('/login').post(authenticationController.logIn);
    }
}

const authenticationRouter = new AuthenticationRouter();

export const authenticationRoutes = authenticationRouter.router;
