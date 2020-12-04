'use strict';

const DeliveriesController = require('./deliveries.controllers');

const contoller = new DeliveriesController();

const basePath = '/deliveries';

module.exports = [
  {
    method: 'POST',
    path: `${basePath}/schedule`,
    handler: contoller.schedule.bind(contoller)
  }
];