angular.module('DoorKit').service('$door', ['$dkapi',
  function($dkapi){
    var _data = {
      object_type: 'door',
      unlocked: false
    }
    
    this.toggleLock = function(){
      if (_data.unlocked) {
        $dkapi.emit('instruction', {
          object_type: _data.object_type,
          action: 'lock'
        });
      } else {
        $dkapi.emit('instruction', {
          object_type: _data.object_type,
          action: 'unlock'
        });
      }
    }

    this.handleNotification = function(data){
      var object_type = data.object_type;
      var action = data.action;
      if (object_type == 'door') {
        if (action == 'unlocked') {
          _data.unlocked = true;
        } else {
          _data.unlocked = false;
        }
      }
    }

    this.getObject = function(){
      return _data;
    }

  }]
);