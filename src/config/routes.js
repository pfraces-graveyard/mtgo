angular.module('app.routes', [
  'ui.router', // $stateProvider, $urlRouterProvider
  'view.home', // <view-home>
  'view.login' // <view-login>
])

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
