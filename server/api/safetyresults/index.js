'use strict';

var ExpressStormpath = require('express-stormpath');
var express = require('express');
var controller = require('./safetyresults.controller');
var nodemailercode = require('./nodemailercode');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', ExpressStormpath.loginRequired, controller.create, nodemailercode);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
