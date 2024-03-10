import {Express} from 'express';
import app from './app';
import { Server } from 'http';

/**
 * Setting Root directory for configuration files 
 */ 
process.env["NODE_CONFIG_DIR"] = __dirname + "\\config";
import config from 'config';

const PORT = process.env.PORT || config.get('Server.PORT');
const environment = config.get('Environment');
const server: Express = app;

const application: Server = server.listen(PORT, function () {
    console.log("%s server started on port %s...", environment, application.address());
});