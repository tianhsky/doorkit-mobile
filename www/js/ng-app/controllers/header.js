angular.module('DoorKit').controller('HeaderCtrl', [
  '$scope', '$state', '$dkclient', '$location',
  function($scope, $state, $dkclient, $location) {
    $scope.title = $state.current.data.title;
    $scope.showBack = $state.current.data.showBack;

    var checkState = function() {
      if ($dkclient.isValid()) {
        $scope.showSignout = true;
      } else {
        $scope.showSignout = false;
      }
    }
    checkState();

    $scope.goBack = function() {
      app.goBack();
    }

    $scope.signIn = function(brokerID) {
      $dkclient.signIn(brokerID);
      checkState();
    }

    $scope.signOut = function() {
      $dkclient.signOut();
      checkState();
      $location.path("#/");
    }

  }
]);
