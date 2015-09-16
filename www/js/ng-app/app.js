angular.module('DoorKit', [
  'ionic',
  'ngAnimate',
  'ui.router',
  'truncate',
  'underscore',
  'store',
  'io'
]).config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider',
  function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
    $stateProvider
      .state('home', {
        url: '/',
        data: {
          title: 'Connect Home',
          showBack: false
        },
        views: {
          '': {
            templateUrl: 'templates/home.connect.html',
            controller: 'ConnectCtrl'
          },
          'header@home': {
            templateUrl: 'templates/header.html',
            controller: 'HeaderCtrl'
          }
        }
      })
      .state('dashboard', {
        url: '/dashboard',
        data: {
          title: 'Dashboard',
          showBack: false
        },
        views: {
          '': {
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardCtrl'
          },
          'doors@dashboard': {
            templateUrl: 'templates/dashboard.doors.html',
            controller: 'DoorsCtrl'
          },
          'header@dashboard': {
            templateUrl: 'templates/header.html',
            controller: 'HeaderCtrl'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  }
]);
