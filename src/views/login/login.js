angular.module('view.login', [
  'ui.router', // $state
  'ngl.log',   // nglLog
  'app.auth',  // appAuth
  'app.user'   // appUser
])

.directive('viewLogin', function ($injector) {
  'use strict';

  var $state = $injector.get('$state');
  var nglLog = $injector.get('nglLog');
  var appAuth = $injector.get('appAuth');
  var appUser = $injector.get('appUser');

  var authenticate = function (user) {
    appUser.authenticate(user.email);
    $state.go('home');
  };

  var login = function (user) {
    appAuth.login(user.email, user.password)
    .then(authenticate.bind(null, user))
    .catch(nglLog);
  };

  var signup = function (user) {
    appAuth.signup(user.email, user.password)
    .then(authenticate.bind(null, user))
    .catch(nglLog);
  };

  var controller = function ($scope) {
    $scope.login = login;
    $scope.signup = signup;

    $scope.user = {};
  };

  return {
    scope: true,
    controller: controller,
    templateUrl: 'login/login.html'
  };
});
