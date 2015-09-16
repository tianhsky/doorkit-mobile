angular.module('DoorKit').service('$door', ['$dkapi',
  function($dkapi) {
    var self = this;
    var _data = {
      object_type: 'door',
      status: 'locked'
    }

    self.toggleLock = function() {
      if (self.isUnLocked()) {
        self.lock();
      } else {
        self.unlock();
      }
    }

    self.lock = function() {
      $dkapi.emit('instruction', {
        object_type: _data.object_type,
        action: 'lock'
      });
    }

    self.unlock = function() {
      $dkapi.emit('instruction', {
        object_type: _data.object_type,
        action: 'unlock'
      });
    }

    self.handleNotification = function(data) {
      var object_type = data.object_type;
      var status = data.status;
      if (object_type == 'door') {
        if (status == 'unlocked') {
          self.setStatus('unlocked');
        } else if (status == 'locked') {
          self.setStatus('locked');
        } else {
          // unknown status
        }
      }
    }

    self.getObject = function() {
      return _data;
    }

    self.setStatus = function(status) {
      _data.status = status;
    }

    self.isLocked = function() {
      return _data.status == 'locked';
    }

    self.isUnLocked = function() {
      return _data.status == 'unlocked';
    }

  }
]);
