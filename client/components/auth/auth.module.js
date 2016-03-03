'use strict';

angular.module('legitrackApp.auth', [
  'legitrackApp.constants',
  'legitrackApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
