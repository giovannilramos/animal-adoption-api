import { loggerError } from '../Api/Utils/Logger';
import { Knex } from 'knex';

if (!process.env.MYSQL_HOST) {
  console.error('MYSQL_HOST is undefined');
  process.exit(1);
}

if (!process.env.MYSQL_PORT) {
  console.error('MYSQL_PORT is undefined');
  process.exit(1);
}

if (!process.env.MYSQL_DATABASE) {
  loggerError(new Error('MYSQL_DATABASE is undefined'));
  process.exit(1);
}

if (!process.env.MYSQL_USERNAME) {
  console.error('MYSQL_USERNAME is undefined');
  process.exit(1);
}

if (!process.env.MYSQL_PASSWORD) {
  console.error('MYSQL_PASSWORD is undefined');
  process.exit(1);
}

const knexConfig: Knex.Config = {
  client: 'mysql2',
  connection: {
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT || '3306'),
    password: process.env.MYSQL_PASSWORD,
    user: process.env.MYSQL_USERNAME,
  },
  pool: {
    min: 2,
    max: 15,
    idleTimeoutMillis: 100000,
  },
  migrations: {
    directory: 'migrations',
  },
  seeds: {
    directory: 'seeds',
  },
};

export default knexConfig;
