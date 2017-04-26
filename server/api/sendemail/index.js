'use strict';
/*var ExpressStormpath = require('express-stormpath');*/
var express = require('express');
var controller = require('./sendemail.controller');
// var config = require('/../../config/local.env.js');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
/*router.post('/', stormpath.loginRequired, controller.create);*/
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
