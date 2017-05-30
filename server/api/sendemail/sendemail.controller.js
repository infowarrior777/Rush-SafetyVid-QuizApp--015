/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/sendemails              ->  index
 * POST    /api/sendemails              ->  create
 * GET     /api/sendemails/:id          ->  show
 * PUT     /api/sendemails/:id          ->  update
 * DELETE  /api/sendemails/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Sendemail from './sendemail.model';
// import config from '/../../../server/config';

 // var config = require('../../config/local.env.js');

/*function updateStormpathsvid(req,res){
  req.user.customData.safetyvidscore = req.body.svidscore;
  req.user.customData.save();

}*/

// var fromEmail = config.fromEmail
// var fromEmailPw = config.fromEmailPw
// var toEmail = config.toEmail

// var emailconfig = 

// var this.fromEmail = config.fromEmail
// var this.fromEmailPw = config.fromEmailPw
// var this.toEmail = config.toEmail



// console.log(config.fromEmail)
// console.log(config.toEmail)
// console.log(config.fromEmailPw)

// console.log(fromEmail)
// console.log(toEmail)
// console.log(fromEmailPw)
var emailconfig = {};
emailconfig =  {
  fromEmail: process.env.fromEmail || config.fromEmail,
  fromEmailPw: process.env.fromEmailPw || config.fromEmailPw,
  toEmail: process.env.toEmail || config.toEmail
};


console.log('The emailconfig object is', emailconfig);


console.log('The from email on the emailconfig object is', emailconfig.fromEmail);


function emailgo(req,res) {


// var fromEmail = config.fromEmail
// var fromEmailPw = config.fromEmailPw
// var toEmail = config.toEmail

console.log('inside emailgo function')
console.log(emailconfig.fromEmail)
console.log(process.env.toEmail)
// console.log(emailconfig.fromEmailPw)

// console.log(fromEmail)
// console.log(toEmail)
// console.log(fromEmailPw)





var nodemailer = require('nodemailer');

var smtpConfig = {
    host: 'smtp.mail.yahoo.com',
    port: 465,
    secure: true, 
    auth: {
        user:  process.env.fromEmail || emailconfig.fromEmail,
        pass: process.env.fromEmailPw || emailconfig.fromEmailPw
    }
};

var transporter = nodemailer.createTransport(smtpConfig);

var mailOptions = {
    from: process.env.fromEmail || emailconfig.fromEmail, 
    to: process.env.toEmail || emailconfig.toEmail,
    subject: req.body.name +" "+ req.body.lastfour + "'s Safety quiz Score", 
    text: 'test1', 
    html: req.body.svidscore + 'test2' 
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});












// Second try above 1-13-17
// First try with old version of nodemailer code below: ( commented out 1-13-17) 



// var nodemailer = require('nodemailer');
// //var transporter = nodemailer.createTransport();

// var smtpTransport = nodemailer.createTransport("SMTP",{
//    service: "Gmail",  // sets automatically host, port and connection security settings
//    auth: {
//        user: "chicoitdepo@gmail.com",
//        pass: "Rush7874"
//    }
// });










// //var send = function emailgo (req,res,next) {


//   smtpTransport.sendMail({  //email options
//   from: "IT Department <chicoitdepo@gmail.com>", // sender address.  Must be the same as authenticated user if using Gmail.
//   to: "Joseph Estrada <infowarrior777@yahoo.com>", // receiver
//   subject: "Emailing with nodemailer", // subject
//   text: "This is from Rush IT Department, CHico, CA !!! Email Example with nodemailer" // body
//   }, function(error, response){  //callback
//   if(error){
//      console.log(error);
//   }else{
//      console.log("Message sent: " + response.message);
//   }

//   smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
//   });

  
// //next();
// // }


// //send();

}









// Rest of yeoman generated endpoint controller code Below: 








function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    if(entity) {
      var updated = _.merge(entity, updates);
      return updated.save()
        .then(updated => {
          return updated;
        });
    }
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Sendemails
export function index(req, res) {
  return Sendemail.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Sendemail from the DB
export function show(req, res) {
  return Sendemail.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Sendemail in the DB
export function create(req, res) {
  return Sendemail.create(req.body)
    .then(respondWithResult(res, 201))
    .then(emailgo(req))
    /*.then(updateStormpathsvid(req))*/
    .catch(handleError(res));
}

// Updates an existing Sendemail in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Sendemail.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Sendemail from the DB
export function destroy(req, res) {
  return Sendemail.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
