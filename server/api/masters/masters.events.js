/**
 * Masters model events
 */

'use strict';

import {EventEmitter} from 'events';
var Masters = require('./masters.model');
var MastersEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MastersEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Masters.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    MastersEvents.emit(event + ':' + doc._id, doc);
    MastersEvents.emit(event, doc);
  }
}

export default MastersEvents;
