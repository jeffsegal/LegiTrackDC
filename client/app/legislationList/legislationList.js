'use strict';

angular.module('legitrackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.legislationList', {
        url: '/legislationList',
        templateUrl: 'app/legislationList/legislationList.html',
        controller: 'LegislationListCtrl'
      });
  });
