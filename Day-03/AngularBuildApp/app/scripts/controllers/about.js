'use strict';

/**
 * @ngdoc function
 * @name angularBuildAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularBuildAppApp
 */
angular.module('angularBuildAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
