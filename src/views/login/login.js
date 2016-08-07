angular.module('view.login', [
  'ui.router',   // $state
  'app.firebase' // appFirebase
])

.directive('viewLogin', function ($injector) {
  'use strict';

  var $state = $injector.get('$state');
  var appFirebase = $injector.get('appFirebase');

  var home = function () {
    $state.go('home');
  };

  var login = function (user) {
    appFirebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(home);
  };

  var signup = function (user) {
    appFirebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(home);
  };

  var controller = function ($scope) {
    $scope.login = login;
    $scope.signup = signup;
  };

  return {
    scope: true,
    controller: controller,
    templateUrl: 'login/login.html'
  };
});
