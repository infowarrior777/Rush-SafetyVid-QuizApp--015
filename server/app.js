/**
 * Main application file
 */

'use strict';

require('babel-register')({
        "presets": ["es2015"]
});

var ExpressStormpath = require('express-stormpath');
var path = require('path');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();



import express from 'express';
import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
import config from './config/environment';
import http from 'http';

// Connect to MongoDB
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

// Populate databases with sample data
if (config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();

app.use(ExpressStormpath.init(app,{


  postRegistrationHandler: function (account, req, res, next) {
    
    var associates = "https://api.stormpath.com/v1/groups/1Taa6kP00KDVo4h5t41LIa"

    console.log('User:', account.email, 'just registered!');
    account.addToGroup(associates, function(err, membership) {
                console.log(membership);
            });


    account.getCustomData(function(err, customData){
  customData.safetyvidscore = 'no score yet';
  customData.save(function(err){
    if(!err) {
      console.log('safetyvidscore was saved');
    }
  });
});



    next();
  },






  
  website: true,
  
  // me: {

		//   expand: {
		//     customData: true,
		//     groups: true
		//   }

  // 	   },


  web: {

  	me: {

		  expand: {
		    customData: true,
		    groups: true
		  }

  	   },



  	
    spa: {
      enabled: true,
      view: path.join(__dirname, '..','client','index.html')
    },

    register: {
    form: {
      fields: {
        lastfour: {
          enabled: true,
          label: 'Last four digits of your social',
          placeholder: '1234',
          required: false,
          type: 'text'
        }
      }
    }
  }





  }
}));


var server = http.createServer(app);
var socketio = require('socket.io')(server, {
  serveClient: config.env !== 'production',
  path: '/socket.io-client'
});
require('./config/socketio').default(socketio);
require('./config/express').default(app);
require('./routes').default(app);

// Start server
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

setImmediate(startServer);

// Expose app
exports = module.exports = app;
