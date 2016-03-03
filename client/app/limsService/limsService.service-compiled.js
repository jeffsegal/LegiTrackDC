'use strict';

angular.module('legitrackApp').service('limsService', function () {
  // AngularJS will instantiate a singleton by calling "new" on this function
  return {

    masters: {
      legislationCategories: [1, 2, 3]
    },

    getFoo: function () {
      return "foo";
    }
  };
});

//# sourceMappingURL=limsService.service-compiled.js.map