'use strict';

/**
 * @ngdoc overview
 * @name angularBuildAppApp
 * @description
 * # angularBuildAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularBuildAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
