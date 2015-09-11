angular.module('DoorKit').controller('ConnectCtrl', ['$scope', '$dkapi', '$dkclient',
  function($scope, $dkapi, $dkclient) {

    if($dkclient.isValid()){
      location.href = "#/dashboard";
    }

    $scope.doorkit = $dkclient.getObject();

    $scope.connectBroker = function() {
      if ($scope.doorkit.broker_id) {
        $dkclient.setBrokerID($scope.doorkit.broker_id);
        $dkapi.connectRoom();
        location.href = "#/dashboard";
      }
      else{
        alert("Please enter access code");
      }
    }

  }
]);