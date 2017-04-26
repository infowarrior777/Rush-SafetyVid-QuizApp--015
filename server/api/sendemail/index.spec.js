'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var sendemailCtrlStub = {
  index: 'sendemailCtrl.index',
  show: 'sendemailCtrl.show',
  create: 'sendemailCtrl.create',
  update: 'sendemailCtrl.update',
  destroy: 'sendemailCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var sendemailIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './sendemail.controller': sendemailCtrlStub
});

describe('Sendemail API Router:', function() {

  it('should return an express router instance', function() {
    sendemailIndex.should.equal(routerStub);
  });

  describe('GET /api/sendemails', function() {

    it('should route to sendemail.controller.index', function() {
      routerStub.get
        .withArgs('/', 'sendemailCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/sendemails/:id', function() {

    it('should route to sendemail.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'sendemailCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/sendemails', function() {

    it('should route to sendemail.controller.create', function() {
      routerStub.post
        .withArgs('/', 'sendemailCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/sendemails/:id', function() {

    it('should route to sendemail.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'sendemailCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/sendemails/:id', function() {

    it('should route to sendemail.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'sendemailCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/sendemails/:id', function() {

    it('should route to sendemail.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'sendemailCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
