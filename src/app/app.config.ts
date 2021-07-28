import * as dotenv from "dotenv";
import * as env from "env-var";

dotenv.config({ path: ".env" });

export const config = {
  environment: env.get("NODE_ENV").required().asString(),
  server: {
    port: env.get("NODE_PORT").required().asIntPositive(),
  },
  mongodb: {
    dbURI: env.get("MONGODB_URI").required().asString(),
  },
  jwt: {
    secretKey: env.get("JWT_SECRET").required().asString(),
    expiration: env.get("JWT_EXPIRATION").required().asIntPositive(),
  },
};
