import * as passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

import { config } from "../app/app.config";
import { userSchema } from "../user/user.schema";
import { Request } from "express";

const localStrategy = new LocalStrategy(
  { usernameField: "email" },
  async (email, password, done) => {
    try {
      const user = await userSchema.findOne({ email });
      const validPassword = await (user && user.validPassword(password));
      if (!user) {
        return done(null, false, {
          message: "Aucun compte correspondant. Veuillez vous inscrire.",
        });
      }
      if (!validPassword) {
        return done(null, false, { message: "Mot de passe invalide" });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
);

const extractTokenFromParams = (req: Request) =>
  (req.params && req.params.token) || null;

const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: config.jwt.secretKey,
    jwtFromRequest: ExtractJwt.fromExtractors([
      extractTokenFromParams,
      ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    ]),
  },
  async (jwtPayload, done) => {
    try {
      const user = await userSchema.findById(jwtPayload.id);
      return user ? done(null, user) : done(null, false);
    } catch (error) {
      return done(error);
    }
  }
);

passport.use(localStrategy);
passport.use(jwtStrategy);

export default passport;
