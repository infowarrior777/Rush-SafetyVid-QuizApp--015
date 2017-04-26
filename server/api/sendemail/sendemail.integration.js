'use strict';

var app = require('../..');
import request from 'supertest';

var newSendemail;

describe('Sendemail API:', function() {

  describe('GET /api/sendemails', function() {
    var sendemails;

    beforeEach(function(done) {
      request(app)
        .get('/api/sendemails')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          sendemails = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      sendemails.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/sendemails', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/sendemails')
        .send({
          name: 'New Sendemail',
          info: 'This is the brand new sendemail!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newSendemail = res.body;
          done();
        });
    });

    it('should respond with the newly created sendemail', function() {
      newSendemail.name.should.equal('New Sendemail');
      newSendemail.info.should.equal('This is the brand new sendemail!!!');
    });

  });

  describe('GET /api/sendemails/:id', function() {
    var sendemail;

    beforeEach(function(done) {
      request(app)
        .get('/api/sendemails/' + newSendemail._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          sendemail = res.body;
          done();
        });
    });

    afterEach(function() {
      sendemail = {};
    });

    it('should respond with the requested sendemail', function() {
      sendemail.name.should.equal('New Sendemail');
      sendemail.info.should.equal('This is the brand new sendemail!!!');
    });

  });

  describe('PUT /api/sendemails/:id', function() {
    var updatedSendemail;

    beforeEach(function(done) {
      request(app)
        .put('/api/sendemails/' + newSendemail._id)
        .send({
          name: 'Updated Sendemail',
          info: 'This is the updated sendemail!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedSendemail = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSendemail = {};
    });

    it('should respond with the updated sendemail', function() {
      updatedSendemail.name.should.equal('Updated Sendemail');
      updatedSendemail.info.should.equal('This is the updated sendemail!!!');
    });

  });

  describe('DELETE /api/sendemails/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/sendemails/' + newSendemail._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when sendemail does not exist', function(done) {
      request(app)
        .delete('/api/sendemails/' + newSendemail._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
