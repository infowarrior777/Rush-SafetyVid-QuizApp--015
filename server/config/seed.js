/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Rush Employees use this app to make your life easier',
      info: 'Dont stop believing ' +
             'Use our tools ' +
             'Need Help? Dont be afriad to ask.'
    }, {
      name: 'Dont open mysterious email attachments',
      info: 'If in doubt, dont open it' +
             'Always be carefull'
    }, {
      name: 'Online Safety Videos and quizes are now available',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Rush IT wishes you a Happy New Year!!!',
      info: 'Be Safe out there, ' +
             'Happy new year!'
    });
  });

