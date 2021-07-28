import { Request, Response } from 'express';

import { authenticationService } from './authentication.service';
import { AuthenticationResponse } from './authentication.model';

class AuthenticationController {
    logIn(req: Request, res: Response): void {
        authenticationService
            .logIn(req, res)
            .then((response: AuthenticationResponse) => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }
}

export const authenticationController = new AuthenticationController();
