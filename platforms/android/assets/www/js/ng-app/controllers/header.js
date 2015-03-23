ang.controller('HeaderCtrl', ['$scope', '$state',
  function($scope, $state) {
    $scope.title = $state.current.data.title;
    $scope.showBack = $state.current.data.showBack;

    if (localStorage.getItem('broker_id')) {
      $scope.showSignout = true;
    } else {
      $scope.showSignout = false;
    }

    $scope.goBack = function() {
      app.goBack();
    }

    $scope.signOut = function() {
      localStorage.removeItem('broker_id');
      location.href = "#/"
    }

  }
]);