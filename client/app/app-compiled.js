(function (angular) {

  'use strict';

  angular.module('legitrackApp', ['legitrackApp.auth', 'legitrackApp.admin', 'legitrackApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router', 'ui.bootstrap', 'validation.match']).config(function ($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
})(window.angular);

//# sourceMappingURL=app-compiled.js.map