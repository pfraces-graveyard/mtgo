angular.module('app.firebase', [])

.factory('firebase', function ($injector) {
  'use strict';

  var $window = $injector.get('$window');

  return $window.firebase.initializeApp({
    apiKey: 'AIzaSyAFYLFVwTWT1ebSYB3XlHOvW-gBWXTisyU',
    authDomain: 'mtgo-6aa5b.firebaseapp.com',
    databaseURL: 'https://mtgo-6aa5b.firebaseio.com',
    storageBucket: ''
  });
})

.factory('appFirebase', function ($injector) {
  'use strict';

  var $q = $injector.get('$q');
  var firebase = $injector.get('firebase');

  var signInWithEmailAndPassword = function (email, password) {
    var deferred = $q.defer();

    firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(deferred.resolve)
    .catch(deferred.reject);

    return deferred.promise;
  };

  var createUserWithEmailAndPassword = function (email, password) {
    var deferred = $q.defer();

    firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(deferred.resolve)
    .catch(deferred.reject);

    return deferred.promise;
  };

  return {
    createUserWithEmailAndPassword: createUserWithEmailAndPassword,
    signInWithEmailAndPassword: signInWithEmailAndPassword
  };
});
