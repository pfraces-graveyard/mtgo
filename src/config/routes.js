angular.module('app.routes', [
  'ui.router',  // $stateProvider, $urlRouterProvider, $on('$stateChangeStart')
  'app.user',   // appUser
  'view.home',  // <view-home>
  'view.login', // <view-login>
  'view.decks', // <view-decks>
  'view.deck',  // <view-deck>
  'view.rooms', // <view-rooms>
  'view.room'   // <view-room>
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
  })

  .state('decks', {
    abstract: true,
    url: '/decks',
    template: '<div ui-view></div>'
  })
  .state('decks.list', {
    url: '',
    template: '<div view-decks></div>'
  })
  .state('decks.detail', {
    url: '/:id',
    template: '<div view-deck></div>'
  })
  .state('decks.new', {
    url: '/new',
    template: '<div view-deck></div>'
  })

  .state('rooms', {
    abstract: true,
    url: '/rooms',
    template: '<div ui-view></div>'
  })
  .state('rooms.list', {
    url: '',
    template: '<div view-rooms></div>'
  })
  .state('rooms.detail', {
    url: '/:id',
    template: '<div view-room></div>'
  })
  .state('rooms.new', {
    url: '/new',
    template: '<div view-room></div>'
  });
});
