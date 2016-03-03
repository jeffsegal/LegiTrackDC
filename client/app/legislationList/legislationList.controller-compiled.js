'use strict';

var app = angular.module('legitrackApp');

var ROW_LIMIT_DEFAULT = 5;

function LegislationListCtrl($scope, $http, $resource, limsService) {
  var me = this;
  this.$scope = $scope;
  this.$http = $http;
  this.$resource = $resource;

  me.$scope.query = {
    limsBase: 'http://lims.dccouncil.us/api/v1/Legislation',
    CategoryId: 0,
    rowLimit: ROW_LIMIT_DEFAULT,
    offset: 0
  };

  //console.log(limsService.masters.stuff[1]);
  me.resetResults();
  me.$scope.searching = false;
  me.populateLocalMasters();

  $scope.searchLegislation = function (query, isNew) {
    me.searchLegislation(query, isNew);
  };
  $scope.nextPageDisabledClass = function () {
    return me.nextPageDisabledClass();
  };
  $scope.getStatusClass = function (legislation) {
    return me.getStatusClass(legislation);
  };
  $scope.loadMore = function () {
    me.loadMore();
  };
}

/**
 * Public Methods
 */

LegislationListCtrl.prototype.searchLegislation = function (query, isNew) {
  var me = this;
  if (isNew) {
    me.resetPagination();
    me.resetResults();
  }
  var url = query.limsBase + '/Search/' + query.rowLimit + '/' + query.offset;
  console.log("Issuing query to " + url);
  me.$scope.searching = true;
  me.$http.post(url, {
    Keyword: query.text,
    CategoryId: query.CategoryId
  }).then(function (response) {
    //console.log('response: ' + JSON.stringify(response));
    me.$scope.response = response;
    me.$scope.results = me.$scope.results.concat(response.data);
  }, function (error) {
    console.log('Error: ' + error);
    me.$scope.response = error;
  }).finally(function (response) {
    me.$scope.searching = false;
    console.log('done');
  });
};

LegislationListCtrl.prototype.nextPageDisabledClass = function () {
  var me = this;
  return me.$scope.response && me.$scope.response.data.length >= ROW_LIMIT_DEFAULT ? "" : "disabled";
  //return "disabled";
};

LegislationListCtrl.prototype.getStatusClass = function (legislation) {
  switch (legislation.LegislationStatus) {
    case "New":
      return "glyphicon glyphicon-star-empty";break;
    case "Deemed Approved":
      return "glyphicon glyphicon-ok";break;
    case "Under Council Review":
      return "glyphicon glyphicon-hourglass";break;
    case "Withdrawn":
      return "glyphicon glyphicon-remove";break;
    default:
      return "glyphicon glyphicon-flag";
  }
};

LegislationListCtrl.prototype.loadMore = function () {
  //TODO: fix resetting of text query
  var me = this;
  me.$scope.query.offset++;
  me.searchLegislation(me.$scope.query, false);
};

/**
 * Private Methods
 */

LegislationListCtrl.prototype.resetPagination = function () {
  var me = this;
  me.$scope.query.rowLimit = ROW_LIMIT_DEFAULT;
  me.$scope.query.offset = 0;
};

LegislationListCtrl.prototype.resetResults = function () {
  var me = this;
  me.$scope.results = [];
  me.$scope.response = null;
};

LegislationListCtrl.prototype.populateLocalMasters = function () {
  var me = this;
  var Masters = $resource('/api/masters/:name', { name: '@name' });
  var user = Masters.get({}, function (response) {
    var json = JSON.parse(response);
    console.log(json);
    me.$scope.masters = json;
  });
};

app.controller('LegislationListCtrl', LegislationListCtrl);

//# sourceMappingURL=legislationList.controller-compiled.js.map