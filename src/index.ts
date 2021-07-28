import { app } from './app/app';

import { logger } from './app/app.logger';
import { config } from './app/app.config';
import { database } from './app/app.database';

logger.info('Starting application ...');

database.connect(() => {
    const srv = app.init(config.server.port);
});
