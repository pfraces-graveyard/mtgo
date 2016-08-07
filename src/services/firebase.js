angular.module('app.firebase', [])

.factory('appFirebase', function ($injector) {
  'use strict';

  var $window = $injector.get('$window');

  var firebase = $window.firebase;

  var appFirebase = firebase.initializeApp({
    apiKey: 'AIzaSyAFYLFVwTWT1ebSYB3XlHOvW-gBWXTisyU',
    authDomain: 'mtgo-6aa5b.firebaseapp.com',
    databaseURL: 'https://mtgo-6aa5b.firebaseio.com',
    storageBucket: ''
  });

  return appFirebase;
});
