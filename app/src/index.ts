import 'reflect-metadata';
import 'dotenv/config';
import { App } from './App';
import { ConnectServer } from './ConnectServer';
import { knexTestConnection } from './Database/KnexConnection';

const start = async () => {
  await knexTestConnection();
  const connectServer = new ConnectServer(new App());
  connectServer.startServer();
};

start().then();
