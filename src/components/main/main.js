angular.module('app.main', [
  'app.header', // <app-header>
  'app.view',   // <app-view>
  'app.footer', // <app-footer>
  'app.log'     // <app-log>
 ])

.directive('appMain', function () {
  'use strict';

  var controller = function () {};

  return {
    controller: controller,
    templateUrl: 'main/main.html'
  };
});

