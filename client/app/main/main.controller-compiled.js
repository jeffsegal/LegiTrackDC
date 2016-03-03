'use strict';

(function () {

  class MainController {

    constructor($http, $scope, $state, socket) {
      this.$http = $http;
      this.awesomeThings = [];

      $http.get('/api/things').then(response => {
        this.awesomeThings = response.data;
        socket.syncUpdates('thing', this.awesomeThings);
      });

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('thing');
      });

      $state.transitionTo('main.content');
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', { name: this.newThing });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  //MainController.$inject = ['$http', '$scope', 'bluebird'];

  angular.module('legitrackApp').controller('MainController', MainController);
})();

//# sourceMappingURL=main.controller-compiled.js.map