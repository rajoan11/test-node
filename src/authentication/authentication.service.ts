import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as passport from 'passport';

import { config } from '../app/app.config';

import { AuthenticationResponse } from '../authentication/authentication.model';

class AuthenticationService {
    logIn(req: Request, res: Response): Promise<AuthenticationResponse> {
        return new Promise((resolve, reject) => {
            passport.authenticate('local', { session: false }, (err, retUser, info) => {
                if (err || !retUser) {
                    reject(err || info);
                } else {
                    const user = {
                        id: retUser._id, email: retUser.email, adresse: retUser.adresse,
                        firstname: retUser.firstname, lastname: retUser.lastname, role: retUser.role };
                    const token = jwt.sign(user, config.jwt.secretKey, {
                        expiresIn: config.jwt.expiration
                    });
                    resolve({ user, token });
                }
            })(req, res);
        });
    }
}

export const authenticationService = new AuthenticationService();
