'use strict';

describe('Controller: LegislationListCtrl', function () {

  // load the controller's module
  beforeEach(module('legitrackApp'));

  var LegislationListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LegislationListCtrl = $controller('LegislationListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    'foo'.should.equal('foo');
  });
});
