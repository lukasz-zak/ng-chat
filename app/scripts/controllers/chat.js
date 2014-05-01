'use strict';

angular.module('chat')
  .controller('ChatCtrl', function ($scope, Pusher, $http) {

    $scope.title = 'Chat page';
    $scope.messages = [];
    $scope.msg = {};

    Pusher.subscribe('chat', 'update', function(data) {
      $scope.messages.push(data);
    });

    $scope.sendMsg = function (msg) {
      msg.time = Date.now();
      msg.author = 'Test';

      console.log('msg', msg);

      $http.post('/api/messages', msg);
      $scope.msg = '';
    }

  });
