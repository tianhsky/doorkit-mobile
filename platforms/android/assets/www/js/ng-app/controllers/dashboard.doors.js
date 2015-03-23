ang.controller('DoorsCtrl', ['$scope', 'socket',
  function($scope, socket) {

    $scope.door = {
      unlocked: false
    };

    $scope.toggleLock = function() {
      var broker_id = localStorage.getItem('broker_id');
      if ($scope.door.unlocked) {
        socket.emit('instruction', {
          object_type: 'door',
          action: 'lock'
        });
      } else {
        socket.emit('instruction', {
          object_type: 'door',
          action: 'unlock'
        });
      }
    }

    var handleNotification = function(data) {
      var object_type = data.object_type;
      var action = data.action;
      if (object_type == 'door') {
        if (action == 'unlocked') {
          $scope.door.unlocked = true;
        } else {
          $scope.door.unlocked = false;
        }
      }
    }
    socket.on('notification', handleNotification);
    $scope.$on('$destroy', function() {
      socket.removeListener('notification', handleNotification);
    });

  }
]);