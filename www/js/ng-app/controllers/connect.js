angular.module('DoorKit').controller('ConnectCtrl', [
  '$scope', '$dkapi', '$dkclient', '$location',
  function($scope, $dkapi, $dkclient, $location) {

    $scope.doorkit = {
      broker_id: null
    }

    if ($dkclient.isValid()) {
      $location.path("#/dashboard");
    }

    $scope.connectBroker = function() {
      $dkclient.setBrokerID($scope.doorkit.broker_id);
      if($dkclient.isValid()){
        $dkapi.connectRoom();
        $location.path("#/dashboard");
      }
      else{
        alert("Please enter access code");
      }
    }

  }
]);
