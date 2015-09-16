describe('dkclientSpec', function() {

  var $store, $dkclient;

  beforeEach(module('DoorKit'));

  beforeEach(inject(function(_$dkclient_) {
    $dkclient = _$dkclient_;
  }));

  it('should be valid if signed in', function() {
    $dkclient.signOut();
    expect($dkclient.isValid()).toBe(false);
  });

  it('should be invalid if signed out', function() {
    $dkclient.signIn("test-broker-id");
    expect($dkclient.isValid()).toBe(true);
  });

});
