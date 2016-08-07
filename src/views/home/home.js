angular.module('view.home', [
  'ui.router' // <ui-sref>
])

.directive('viewHome', function () {
  'use strict';

  var controller = function () {};

  return {
    scope: true,
    controller: controller,
    templateUrl: 'home/home.html'
  };
});
