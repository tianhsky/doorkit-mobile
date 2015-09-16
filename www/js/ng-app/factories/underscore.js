angular.module('underscore', []);
angular.module('underscore').factory('_', ['$window', function($window) {
  return $window._;
}]);
