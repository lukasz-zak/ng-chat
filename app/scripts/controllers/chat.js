'use strict';

angular.module('chat')
  .controller('ChatCtrl', function ($scope, Pusher, $http) {

    $scope.title = 'Chat page';
    $scope.messages = [];
    $scope.msg = {};
    $scope.userName = '';
    $scope.showLoginForm = false;
    $scope.showChatForm = false;

    if($scope.userName === ''){
      $scope.showLoginForm = true;
    }

    $scope.saveLogin = function (user) {
      $scope.userName = user.login;
      $scope.showLoginForm = false;
      $scope.showChatForm = true;
    };

    $scope.sendMsg = function (msg) {
      msg.time = Date.now();
      msg.author = $scope.userName;
      console.log('msg:', msg);

      $http.post('/api/messages', msg);

      $scope.msg = '';
    };


    /********************PUSHER***********************/
    Pusher.subscribe('chat', 'update', function(data) {
      $scope.messages.push(data);
    });

  });
