'use strict';

import mongoose from 'mongoose';

var SafetyresultsSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  fullname: String,
  svidscore: String,
  lastfour: String,
  wpm: String,
  errs: String,
  accuracy: String,
  time: String  

});

export default mongoose.model('Safetyresults', SafetyresultsSchema);
