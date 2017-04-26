'use strict';

var app = require('../..');
import request from 'supertest';

var newSafetyresults;

describe('Safetyresults API:', function() {

  describe('GET /api/safetyresultss', function() {
    var safetyresultss;

    beforeEach(function(done) {
      request(app)
        .get('/api/safetyresultss')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          safetyresultss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      safetyresultss.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/safetyresultss', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/safetyresultss')
        .send({
          name: 'New Safetyresults',
          info: 'This is the brand new safetyresults!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newSafetyresults = res.body;
          done();
        });
    });

    it('should respond with the newly created safetyresults', function() {
      newSafetyresults.name.should.equal('New Safetyresults');
      newSafetyresults.info.should.equal('This is the brand new safetyresults!!!');
    });

  });

  describe('GET /api/safetyresultss/:id', function() {
    var safetyresults;

    beforeEach(function(done) {
      request(app)
        .get('/api/safetyresultss/' + newSafetyresults._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          safetyresults = res.body;
          done();
        });
    });

    afterEach(function() {
      safetyresults = {};
    });

    it('should respond with the requested safetyresults', function() {
      safetyresults.name.should.equal('New Safetyresults');
      safetyresults.info.should.equal('This is the brand new safetyresults!!!');
    });

  });

  describe('PUT /api/safetyresultss/:id', function() {
    var updatedSafetyresults;

    beforeEach(function(done) {
      request(app)
        .put('/api/safetyresultss/' + newSafetyresults._id)
        .send({
          name: 'Updated Safetyresults',
          info: 'This is the updated safetyresults!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedSafetyresults = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSafetyresults = {};
    });

    it('should respond with the updated safetyresults', function() {
      updatedSafetyresults.name.should.equal('Updated Safetyresults');
      updatedSafetyresults.info.should.equal('This is the updated safetyresults!!!');
    });

  });

  describe('DELETE /api/safetyresultss/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/safetyresultss/' + newSafetyresults._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when safetyresults does not exist', function(done) {
      request(app)
        .delete('/api/safetyresultss/' + newSafetyresults._id)
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
