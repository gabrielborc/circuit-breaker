'use strict';

const Boom = require('@hapi/boom');
const Env = require('../../config/environment.config');

const CircuitBreaker = require('./circuitBreacker');

class ApiHolidaysCircuitBreaker extends CircuitBreaker {
  constructor() {
    const options = {
      name: 'apiholidays',
      ...Env.CIRCUIT_BREAKER.APIHOLIDAYS
    };
    
    super(options);
    this.cache = null;
  }

  async request(url, options={}) {
    this.cache = await this.breaker.fire(url, options);
    return this.cache;
  }

  fallback() {
    if (this.cache) {
      return this.cache;
    }

    const error = Boom.serverUnavailable('O servidor está indisponível, tente novamente mais tarde, desculpem-nos pelo transtorno :(');
    return Promise.reject(error);
  }
}

module.exports = ApiHolidaysCircuitBreaker;