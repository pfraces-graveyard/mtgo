angular.module('view.room', [])

.directive('viewRoom', function () {
  'use strict';

  var controller = function ($scope) {
    $scope.room = {
      name: 'foo'
    };
  };

  return {
    scope: true,
    controller: controller,
    templateUrl: 'room/room.html'
  };
});
