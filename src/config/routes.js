angular.module('app.routes', [
  'ui.router', // $stateProvider, $urlRouterProvider, $on('$stateChangeStart')
  'app.user',  // appUser
  'view.home', // <view-home>
  'view.login' // <view-login>
])

.run(function ($rootScope, $state, appUser) {
  'use strict';

  $rootScope.$on('$stateChangeStart', function (event, toState) {
    if (toState.name === 'login') { return; }
    if (appUser.isAuthenticated()) { return; }

    event.preventDefault();
    $state.go('login');
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
  'use strict';

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    template: '<div view-home></div>'
  })
  .state('login', {
    url: '/login',
    template: '<div view-login></div>'
  });
});
