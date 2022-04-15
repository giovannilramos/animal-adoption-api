import 'dotenv/config';
import winston from 'winston';
import { loggerFormat } from './LoggerConfig';

export const logger = winston.createLogger({
  format: loggerFormat,
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console());
}

export const loggerError = (e: any, requestId?: string) => {
  logger.error(
    JSON.stringify({
      requestId: requestId || null,
      error: e,
      stack: e.stack || null,
    })
  );
};
