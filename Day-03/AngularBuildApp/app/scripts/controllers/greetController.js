angular.module('angularBuildAppApp')
    .service("greetService", function(){
        this.greet = function(name){
            return 'Hi ' + name + ', Have a nice day!';
        }
    })
    .controller("greetController", function($scope, greetService){
        $scope.name = '';
        $scope.greetMsg = '';
        $scope.greet = function(){
            $scope.greetMsg = greetService.greet($scope.name);
        }
    });
