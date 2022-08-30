'use strict';
const { swaggerInit } = require('./lib/index');

module.exports = app => {
  app.config.coreMiddleware.unshift('request');
  app.beforeStart(async () => {

    swaggerInit(app);

  });

};
