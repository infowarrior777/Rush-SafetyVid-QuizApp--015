'use strict';

import mongoose from 'mongoose';

var SendemailSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  svidscore: String,
  lastfour: String
});

export default mongoose.model('Sendemail', SendemailSchema);
