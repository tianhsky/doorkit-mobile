angular.module('DoorKit').factory('$dkapiMock', ['$rootScope', '$dkclient',
  function($rootScope, $dkclient) {

    var socket = {
      connected: false
    };
    var callbacks = {};

    var api = {
      triggerEvent: function(eventName, obj) {
        var cb = callbacks[eventName];
        if (cb) {
          cb(obj);
        }
      },
      on: function(eventName, callback) {
        callbacks[eventName] = callback;
      },
      emit: function(eventName, data, callback) {},
      connectRoom: function() {
        socket.connected = true;
      },
      connected: function() {
        return socket.connected;
      },
      removeListener: function(name, fun) {
        if (callbacks[name]) {
          callbacks[name] = null;
        }
      }
    };

    return api;
  }
]);
