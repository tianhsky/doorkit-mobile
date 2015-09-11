angular.module('DoorKit').controller('HeaderCtrl', ['$scope', '$state', '$dkclient',
  function($scope, $state, $dkclient) {
    $scope.title = $state.current.data.title;
    $scope.showBack = $state.current.data.showBack;

    if ($dkclient.isValid()) {
      $scope.showSignout = true;
    } else {
      $scope.showSignout = false;
    }

    $scope.goBack = function() {
      app.goBack();
    }

    $scope.signOut = function() {
      $dkclient.signOut();
      location.href = "#/"
    }

  }
]);