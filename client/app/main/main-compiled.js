(function (angular) {

  'use strict';

  angular.module('legitrackApp').config(function ($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    }).state('main.content', {
      views: {
        'legislationList': {
          templateUrl: 'app/legislationList/legislationList.html',
          controller: 'LegislationListCtrl'
        }
      }
    });
  });
})(window.angular);

//# sourceMappingURL=main-compiled.js.map