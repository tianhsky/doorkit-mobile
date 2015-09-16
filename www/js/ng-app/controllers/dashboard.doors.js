angular.module('DoorKit').controller('DoorsCtrl', ['$scope', '$dkapi', '$door',
  function($scope, $dkapi, $door) {

    $scope.door = $door.getObject();

    $scope.toggleLock = function() {
      $door.toggleLock();
    }

    $dkapi.on('notification', $door.handleNotification);
    $scope.$on('$destroy', function() {
      $dkapi.removeListener('notification', $door.handleNotification);
    });

  }
]);
