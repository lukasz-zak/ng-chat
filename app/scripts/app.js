'use strict';

angular.module('chat', []);

angular
  .module('angularChatWithPusherApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'chat',
    'doowb.angular-pusher'
  ])
  .config(function ($routeProvider, $locationProvider, PusherServiceProvider) {
    PusherServiceProvider
      .setToken('72c81a88817432c3ed7e')
      .setOptions({});

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/chat', {
        templateUrl: 'views/chat.html',
        controller: 'ChatCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');
  });
