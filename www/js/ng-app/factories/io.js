angular.module('io', []);
angular.module('io').factory('io', ['$window', function($window) {
  return $window.io;
}]);
