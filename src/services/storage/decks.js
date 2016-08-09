angular.module('app.decks', [
  'app.firebase' // firebase
])

.factory('appDecks', function ($injector) {
  'use strict';

  var $rootScope = $injector.get('$rootScope');
  var $q = $injector.get('$q');
  var firebase = $injector.get('firebase');

  var ref = firebase.database().ref('decks');

  var list = function () {
    var decks = {};

    ref.on('child_added', function (data) {
      $rootScope.$apply(function () {
        decks[data.key] = data.val();
      });
    });

    ref.on('child_changed', function (data) {
      $rootScope.$apply(function () {
        decks[data.key] = data.val();
      });
    });

    ref.on('child_removed', function (data) {
      $rootScope.$apply(function () {
        delete decks[data.key];
      });
    });

    return decks;
  };

  var create = function (deck) {
    var deferred = $q.defer();

    ref.push(deck)
    .then(deferred.resolve)
    .catch(deferred.reject);

    return deferred.promise;
  };

  var get = function (id) {
    var deck = {};

    ref.child(id).on('value', function (data) {
      $rootScope.$apply(function () {
        angular.extend(deck, data);
      });
    });

    return deck;
  };

  return {
    list: list,
    create: create,
    get: get
  };
});
