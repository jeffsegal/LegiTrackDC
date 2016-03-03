'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var MastersSchema = new mongoose.Schema({
  name: String,
  value: mongoose.Schema.Types.Mixed
});

module.exports = mongoose.model('Masters', MastersSchema);
