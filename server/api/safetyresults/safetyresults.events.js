/**
 * Safetyresults model events
 */

'use strict';

import {EventEmitter} from 'events';
import Safetyresults from './safetyresults.model';
var SafetyresultsEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SafetyresultsEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Safetyresults.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    SafetyresultsEvents.emit(event + ':' + doc._id, doc);
    SafetyresultsEvents.emit(event, doc);
  }
}

export default SafetyresultsEvents;
