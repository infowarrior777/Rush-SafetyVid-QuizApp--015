'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var safetyresultsCtrlStub = {
  index: 'safetyresultsCtrl.index',
  show: 'safetyresultsCtrl.show',
  create: 'safetyresultsCtrl.create',
  update: 'safetyresultsCtrl.update',
  destroy: 'safetyresultsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var safetyresultsIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './safetyresults.controller': safetyresultsCtrlStub
});

describe('Safetyresults API Router:', function() {

  it('should return an express router instance', function() {
    safetyresultsIndex.should.equal(routerStub);
  });

  describe('GET /api/safetyresultss', function() {

    it('should route to safetyresults.controller.index', function() {
      routerStub.get
        .withArgs('/', 'safetyresultsCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/safetyresultss/:id', function() {

    it('should route to safetyresults.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'safetyresultsCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/safetyresultss', function() {

    it('should route to safetyresults.controller.create', function() {
      routerStub.post
        .withArgs('/', 'safetyresultsCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/safetyresultss/:id', function() {

    it('should route to safetyresults.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'safetyresultsCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/safetyresultss/:id', function() {

    it('should route to safetyresults.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'safetyresultsCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/safetyresultss/:id', function() {

    it('should route to safetyresults.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'safetyresultsCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
