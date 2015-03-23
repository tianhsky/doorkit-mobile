ang.controller('ConnectCtrl', ['$scope', 'socket',
  function($scope, socket) {

    if(localStorage.getItem('broker_id')){
      location.href = "#/dashboard";
    }

    $scope.doorkit = {
      broker_id: localStorage.getItem('broker_id')
    };

    $scope.connectBroker = function() {
      if ($scope.doorkit.broker_id) {
        localStorage.setItem('broker_id', $scope.doorkit.broker_id);
        socket.connectRoom();
        location.href = "#/dashboard"
      }
      else{
        alert("Please enter access code");
      }
    }

  }
]);