'use strict';

const DeliveriesBusiness = require('./deliveries.business');

class DeliveriesController {
  constructor(business = DeliveriesBusiness) {
    this.business = new business();
  }

  async schedule(req, h) {
    const { payload } = req;

    return this.business.schedule(payload);
  }
}

module.exports = DeliveriesController;