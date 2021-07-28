import * as appRoot from 'app-root-path';
import * as winston from 'winston';

export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.File({
          filename: `${appRoot}/logs/infos.log`,
          level: 'info',
          handleExceptions: true
        }),
      new winston.transports.Console({
          level: 'debug',
          handleExceptions: true
      })
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: `${appRoot}/logs/exceptions.log`, format: winston.format.json() })
    ],
    exitOnError: false
  });

class MorganStream {
    write(text: string) {
        logger.info(text.trim());
    }
}

export const morganStream = new MorganStream();
