'use strict';

const request = require('request-promise');

const PINGOMETER_URI = 'https://api.pingometer.com/v1.1/';

/**
 * @typedef MetricResponse
 * @type {Object}
 * @property {Object.<string, Metric>} metrics
 */

/**
 * @typedef Metric
 * @type {Object}
 * @property {number} uT
 */

/**
 * Pingometer API
 *
 * Provides methods for interacting with the Pingometer API.
 */
class Pingometer {
  /**
   * Constructor
   *
   * @param {String} username
   * @param {String} password
   */
  constructor(username, password) {
    this.request  = request.defaults({
      json: true,
      auth: {
        username: username,
        password: password
      }
    });
  }

  /**
   * Get Metrics
   *
   * Fetches the metrics from pingometer.
   *
   * @fulfills {MetricResponse}
   * @return {Promise}
   */
  getMetrics() {
    return this.request.get(PINGOMETER_URI + 'metrics/');
  }
}

module.exports = Pingometer;
