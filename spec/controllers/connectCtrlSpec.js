describe('ConnectCtrlSpec', function() {

  var $rootScope, $scope, $controller, $dkapi, $dkclient, controller;

  beforeEach(module('DoorKit'));

  beforeEach(inject(function(_$rootScope_, _$controller_, _$dkclient_, _$dkapiMock_) {
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $controller = _$controller_;
    $dkclient = _$dkclient_;
    $dkapi = _$dkapiMock_;

    controller = $controller('ConnectCtrl', {
      '$rootScope': $rootScope,
      '$scope': $scope,
      '$dkapi': $dkapi,
      '$dkclient': $dkclient
    });
  }));

  it('should not connect to room if signin succesfull', function() {
    $scope.doorkit.broker_id = '';
    $scope.connectBroker();
    expect($dkclient.isValid()).toBe(false);
  });

  it('should connect to room if signin succesfull', function() {
    $scope.doorkit.broker_id = 'test-broker-id';
    $scope.connectBroker();
    expect($dkclient.isValid()).toBe(true);
    expect($dkapi.connected()).toBe(true);
  });

});
