'use strict';

const Env = require('../config/environment.config');
const ApiHolidaysCircuitBreaker = require('../commons/circuitBreaker/apiHolidaysCircuitBreaker');

class ApiHolidays {
  constructor(cb = ApiHolidaysCircuitBreaker) {
    this.cb = new cb();
  }

  async list() {
    return this.cb.request(`${Env.APIHOLIDAYS_HOST}/holidays`);
  }
}

module.exports = ApiHolidays;