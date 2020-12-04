'use strict';

const got = require('got');
const Env = require('../config/environment.config');

class ApiHolidays {
  async list() {
    return got(`${Env.APIHOLIDAYS_HOST}/holidays`, { responseType: 'json', resolveBodyOnly: true });
  }
}

module.exports = ApiHolidays;