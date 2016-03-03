'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var mastersCtrlStub = {
  index: 'mastersCtrl.index',
  show: 'mastersCtrl.show',
  create: 'mastersCtrl.create',
  update: 'mastersCtrl.update',
  destroy: 'mastersCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var mastersIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './masters.controller': mastersCtrlStub
});

describe('Masters API Router:', function() {

  it('should return an express router instance', function() {
    mastersIndex.should.equal(routerStub);
  });

  describe('GET /api/masters', function() {

    it('should route to masters.controller.index', function() {
      routerStub.get
        .withArgs('/', 'mastersCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/masters/:id', function() {

    it('should route to masters.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'mastersCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/masters', function() {

    it('should route to masters.controller.create', function() {
      routerStub.post
        .withArgs('/', 'mastersCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/masters/:id', function() {

    it('should route to masters.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'mastersCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/masters/:id', function() {

    it('should route to masters.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'mastersCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/masters/:id', function() {

    it('should route to masters.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'mastersCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
