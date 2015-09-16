describe('HeaderCtrlSpec', function() {

  var $rootScope, $scope, $controller, $state, $dkclient, controller;

  beforeEach(module('DoorKit'));

  beforeEach(function() {
    $state = {
      current: {
        data: {
          title: 'test'
        }
      }
    };
  });

  beforeEach(inject(function(_$rootScope_, _$controller_, _$dkclient_) {
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $controller = _$controller_;
    $dkclient = _$dkclient_;

    controller = $controller('HeaderCtrl', {
      '$rootScope': $rootScope,
      '$scope': $scope,
      '$state': $state,
      '$dkclient': $dkclient
    });
  }));

  it('should showSignout if signed in', function() {
    $scope.signOut();
    $scope.signIn('test-broker-id');
    expect($scope.showSignout).toBe(true);
  });

  it('should not showSignout if signed out', function() {
    $scope.signOut();
    expect($scope.showSignout).toBe(false);
  });

});
