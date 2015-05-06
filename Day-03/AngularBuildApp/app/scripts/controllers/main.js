'use strict';

/**
 * @ngdoc function
 * @name angularBuildAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularBuildAppApp
 */
angular.module('angularBuildAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
