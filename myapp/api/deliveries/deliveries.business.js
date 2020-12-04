'use strict';

const Boom = require('@hapi/boom');
const ApiHolidays = require('../../services/apiHolidays');

class DeliveriesBusiness {
  constructor(serviceApiHolidays = ApiHolidays) {
    this.serviceApiHolidays = new serviceApiHolidays();
  }

  async schedule({ schedule_date }) {
    const holidays = await this.serviceApiHolidays.list();

    const isHoliday = holidays.some((holiday) => holiday.date === schedule_date);

    if (isHoliday) {
      throw Boom.badRequest(`Esta data ${schedule_date} é feriado, escolha outra.`); 
    }
    
    return {
      "message": `Seu pedido foi agendado para ser entregue na data ${schedule_date}.`
    };
  }
}

module.exports = DeliveriesBusiness;