'use strict';

process.env.NODE_ENV = 'development';

var Masters = require('../api/masters/masters.model');
//var config = require('./environment');
//var mongoose = require('mongoose');
//mongoose.Promise = require('bluebird');
var request = require('request');

//// Connect to MongoDB
//mongoose.connect(config.mongo.uri, config.mongo.options);
//mongoose.connection.on('error', function(err) {
//  console.error('MongoDB connection error: ' + err);
//  process.exit(-1);
//});

Masters.find({}).removeAsync().then(() => {

  console.log('Looking up Masters...');
  request('http://lims.dccouncil.us/api/v1/masters/LIMSLookUps', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('Saving Masters...');
      var json = JSON.parse(body);
      for (var key in json) {
        Masters.create({
          name: key,
          value: json[key]
        });
      }
    }
  });
}).then(() => {});

//# sourceMappingURL=masters-populator-compiled.js.map