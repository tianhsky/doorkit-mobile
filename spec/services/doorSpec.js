describe('doorSpec', function() {

  var $door, $dkapi;

  beforeEach(module('DoorKit'));

  beforeEach(module(function($provide) {
    $dkapi = function() {
      return {
        emit: function(){}
      }
    };
    $provide.factory('$dkapi', $dkapi);
  }));

  beforeEach(inject(function(_$door_) {
    $door = _$door_;
  }));

  it('should not change state to locked after lock', function() {
    $door.setStatus('unlocked');
    $door.lock();
    expect($door.isLocked()).toBe(false);
  });

  it('should change state to locked after receive lock ack', function() {
    $door.setStatus('unlocked');
    var instruction = {
      object_type: 'door',
      status: 'locked'
    };
    $door.handleNotification(instruction);
    expect($door.isLocked()).toBe(true);
  });

});
