'use strict';

const got = require('got');
const opossum = require('opossum');

class CircuitBreaker {
  constructor(options) {
    this.breaker = new opossum(this.handler, options);

    this.breaker.on('open', this.onOpen);
    this.breaker.on('halfOpen', this.onHalfOpen);
    this.breaker.on('close', this.onClose);
    this.breaker.fallback(this.fallback.bind(this));
  }

  async handler(url, options) {
    return got(url, {
      ...options,
      responseType: 'json', 
      resolveBodyOnly: true
    });
  }

  fallback() {} //Implementar na classe filha

  onOpen () {
    console.log('cb: open');
  }

  onHalfOpen () {
    console.log('cb: half open');
  }

  onClose () {
    console.log('cb: close');
  }
}

module.exports = CircuitBreaker;