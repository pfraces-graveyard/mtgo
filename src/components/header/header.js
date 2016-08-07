angular.module('app.header', [])

.directive('appHeader', function () {
  'use strict';

  var controller = function ($scope) {
    $scope.title = 'mtgo';
  };

  return {
    scope: true,
    controller: controller,
    templateUrl: 'header/header.html'
  };
});
