angular.module('view.rooms', [
  'ui.router' // <ui-sref>
])

.directive('viewRooms', function () {
  'use strict';

  var controller = function ($scope) {
    $scope.rooms = [
      {
        id: '0',
        name: 'foo'
      },
      {
        id: '1',
        name: 'bar'
      }
    ];
  };

  return {
    scope: true,
    controller: controller,
    templateUrl: 'rooms/rooms.html'
  };
});
