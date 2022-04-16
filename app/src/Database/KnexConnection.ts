import knex from 'knex';
import knexConfig from './KnexFile';
import { logger, loggerError } from '../Api/Utils/Logger';

export const KnexInstance = knex(knexConfig);

export const knexTestConnection = async () => {
  try {
    await KnexInstance.raw('SELECT 1');
    logger.info('Database connected');
  } catch (e) {
    loggerError(e);
    process.exit(1);
  }
};
