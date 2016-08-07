angular.module('app.log', [
  'ngl.lodash', // lodash
  'ngl.log'     // nglLog, <ngl-log>
])

.factory('appLogFields', function ($injector) {
  'use strict';

  var lodash = $injector.get('lodash');
  var nglLog = $injector.get('nglLog');

  var fieldsFmt = function (fields) {
    return lodash
      .chain(fields)
      .keyBy('label')
      .mapValues('value')
      .value();
  };

  var logFields = function (fields) {
    nglLog(fieldsFmt(fields));
  };

  return logFields;
})

.directive('appLog', function ($injector) {
  'use strict';

  var nglLogCache = $injector.get('nglLogCache');

  var controller = function ($scope) {

    $scope.showLog = function () {
      return nglLogCache.length;
    };

    $scope.clearLog = function () {
      nglLogCache.length = 0;
    };
  };

  return {
    scope: true,
    controller: controller,
    templateUrl: 'log/log.html'
  };
});
