angular.module('view.decks', [
  'ui.router', // <ui-sref>
  'app.decks'  // appDecks
])

.directive('viewDecks', function ($injector) {
  'use strict';

  var appDecks = $injector.get('appDecks');

  var controller = function ($scope) {
    /*
    $scope.decks = [
      {
        id: '0',
        name: 'foo'
      },
      {
        id: '1',
        name: 'bar'
      }
    ];
    */

   $scope.decks = appDecks.list();
  };

  return {
    scope: true,
    controller: controller,
    templateUrl: 'decks/decks.html'
  };
});
