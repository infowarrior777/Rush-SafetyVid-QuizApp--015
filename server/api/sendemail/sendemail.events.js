/**
 * Sendemail model events
 */

'use strict';

import {EventEmitter} from 'events';
import Sendemail from './sendemail.model';
var SendemailEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SendemailEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Sendemail.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    SendemailEvents.emit(event + ':' + doc._id, doc);
    SendemailEvents.emit(event, doc);
  }
}

export default SendemailEvents;
