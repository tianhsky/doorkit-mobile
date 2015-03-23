ang.factory('socket', function($rootScope) {
  var socket = io.connect('https://doorkit.herokuapp.com');

  var s = {
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
      var broker_id = localStorage.getItem('broker_id');
      if (broker_id) {
        var client = {
          broker_id: broker_id,
          client_type: 'user'
        };
        socket.emit('client:connect', client);
      }
    },
    connected: function() {
      return socket.connected;
    },
    removeListener: function(name, fun) {
      socket.removeListener(name, fun);
    }
  };

  socket.on('connect', function() {
    s.connectRoom();
  });

  socket.on('error', function(err) {
    socket.disconnect();
    socket.connect();
  });

  return s;
});