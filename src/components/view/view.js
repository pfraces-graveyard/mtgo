angular.module('app.view', [
  'ui.router' // <ui-view>
])

.directive('appView', function () {
  'use strict';

  var controller = function () {};

  return {
    scope: true,
    controller: controller,
    templateUrl: 'view/view.html'
  };
});
