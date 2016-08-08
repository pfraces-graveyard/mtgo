angular.module('app.user', [])

.factory('appUser', function () {
  var user = null;

  var authenticate = function (email) {
    user = {
      email: email
    };
  };

  var isAuthenticated = function () {
    return !!user;
  };

  return {
    authenticate: authenticate,
    isAuthenticated: isAuthenticated
  };
});
