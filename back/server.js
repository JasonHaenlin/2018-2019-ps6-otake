/**
 * Module dependencies.
 */
require('module-alias/register');
require('dotenv').config();

const http = require('http');
const config = require('@config').server;
const LogTheInfo = require('@config').logger.LogTheInfo;
const logTheError = require('@config').logger.logTheError;
const app = require('./app');

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
let port = null;
let host = null;

switch (process.env.NODE_ENV) {
  case 'production':
    port = config.production.port;
    host = config.production.host;
    break;
  default:
    port = config.development.port;
    host = config.development.host;
    break;
}

server.listen(port, host);

/**
 * Event listener for HTTP server "listening" event.
 */

const onListening = () => {
  let addr = config.host || '127.0.0.1';
  let port = config.port || '3000';
  LogTheInfo('Listening on ' + addr + ':' + port);
};

/**
 * Event listener for HTTP server "error" event.
 */

const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = config.port || '3000';

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logTheError(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logTheError(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

server.on('error', onError);
server.on('listening', onListening);

// just in case a issue occur
// eslint-disable-next-line no-unused-vars
process.on('unhandledRejection', (reason, promise) => {
  logTheError('Unhandled Rejection at:', reason.stack || reason);
});

module.exports = { server, app };
