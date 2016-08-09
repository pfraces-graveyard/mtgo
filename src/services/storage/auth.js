angular.module('app.auth', [
  'app.firebase', // firebase
])

.factory('appAuth', function ($injector) {
  'use strict';

  var $q = $injector.get('$q');
  var firebase = $injector.get('firebase');

  var signup = function (email, password) {
    var deferred = $q.defer();

    firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(deferred.resolve)
    .catch(deferred.reject);

    return deferred.promise;
  };

  var login = function (email, password) {
    var deferred = $q.defer();

    firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(deferred.resolve)
    .catch(deferred.reject);

    return deferred.promise;
  };

  return {
    signup: signup,
    login: login
  };
});
