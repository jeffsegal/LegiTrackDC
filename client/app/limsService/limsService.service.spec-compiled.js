'use strict';

describe('Service: limsService', function () {

  // load the service's module
  beforeEach(module('legitrackApp'));

  // instantiate service
  var limsService;
  beforeEach(inject(function (_limsService_) {
    limsService = _limsService_;
  }));

  it('should do something', function () {
    !!limsService.should.be.true;
  });
});

//# sourceMappingURL=limsService.service.spec-compiled.js.map