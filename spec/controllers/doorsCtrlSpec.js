describe('DoorsCtrlSpec', function() {

  var $rootScope, $scope, $controller, $door, $dkapi, controller;

  beforeEach(module('DoorKit'));

  beforeEach(module(function($provide) {
    var dkapi = function() {
      return {
        emit: function() {}
      }
    };
    $provide.factory('$dkapi', dkapi);
  }));

  beforeEach(module(function($provide) {
    var io = function() {
      return {}
    };
    $provide.factory('io', io);
  }));

  beforeEach(inject(function(_$rootScope_, _$controller_, _$dkapiMock_, _$door_) {
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $controller = _$controller_;
    $dkapi = _$dkapiMock_;
    $door = _$door_;

    controller = $controller('DoorsCtrl', {
      '$rootScope': $rootScope,
      '$scope': $scope,
      '$dkapi': $dkapi,
      '$door': $door
    });
  }));

  it('should lock the door after receive lock notification', function() {
    $door.setStatus('unlocked');
    expect($door.isLocked()).toBe(false);
    $dkapi.triggerEvent('notification', {
      object_type: 'door',
      status: 'locked'
    });
    expect($door.isLocked()).toBe(true);
  });

});
