'use strict';

const Hapi = require('@hapi/hapi');
const HapiRouter = require('hapi-router');

const Env = require('../config/environment.config');

class Server {
  constructor() {
    this.server = Hapi.server({
      port: Env.PORT || 3000
    });  
  }

  async start() {
    const { server } = this;

    await this._plugins();
    await server.start();

    if (Env.DEBUG) {
      console.log(`\n\nServer running on ${server.info.uri}`);
    }

    return server;
  }

  async _plugins() {
    const { server } = this;

    await server.register([
      {
        plugin: HapiRouter,
        options: {
          routes: '**/**.routes.js',
        },
      }
    ]);
  }
}

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

module.exports = Server;