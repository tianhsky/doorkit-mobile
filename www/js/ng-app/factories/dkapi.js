angular.module('DoorKit').factory('$dkapi', ['$rootScope', '$dkclient', 'io',
  function($rootScope, $dkclient, io) {

    // websocket connection to cloud server
    var socket = io.connect('https://doorkit.herokuapp.com');
    socket.on('connect', function() {
      api.connectRoom();
    });
    socket.on('error', function(err) {
      socket.disconnect();
      socket.connect();
    });

    var api = {
      on: function(eventName, callback) {
        socket.on(eventName, function() {
          var args = arguments;
          $rootScope.$apply(function() {
            callback.apply(socket, args);
          });
        });
      },
      emit: function(eventName, data, callback) {
        socket.emit(eventName, data, function() {
          var args = arguments;
          $rootScope.$apply(function() {
            if (callback) {
              callback.apply(socket, args);
            }
          });
        })
      },
      connectRoom: function() {
        if($dkclient.isValid()){
          socket.emit('client:connect', $dkclient.getObject());
        }
      },
      connected: function() {
        return socket.connected;
      },
      removeListener: function(name, fun) {
        socket.removeListener(name, fun);
      }
    };

    return api;
  }]
);
