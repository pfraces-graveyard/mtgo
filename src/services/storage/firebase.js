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
});
