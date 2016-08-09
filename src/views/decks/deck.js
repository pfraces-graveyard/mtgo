angular.module('view.deck', [
  'ui.router', // $stateParams
  'ngl.log',   // nglLog
  'app.decks'  // appDecks
])

.directive('viewDeck', function ($injector) {
  'use strict';

  var $stateParams = $injector.get('$stateParams');
  var nglLog = $injector.get('nglLog');
  var appDecks = $injector.get('appDecks');

  var save = function (deck) {
    appDecks.create(deck)
    .then(nglLog.bind(null, 'Saved!'))
    .catch(nglLog);
  };

  var controller = function ($scope) {
    var id = $stateParams.id;
    var isNew = !id || id === 'new';

    $scope.save = save;
    $scope.isNew = isNew;

    $scope.deck = isNew ? {} : appDecks.get(id);
  };

  return {
    scope: true,
    controller: controller,
    templateUrl: 'decks/deck.html'
  };
});
