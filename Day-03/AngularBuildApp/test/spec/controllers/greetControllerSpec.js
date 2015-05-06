describe("Greet Controller", function(){
    beforeEach(function(){
        module("angularBuildAppApp");
    });

    it("Should initialize the name with empty string", inject(function($controller){
        var dummyScope = {};
        $controller("greetController", {$scope : dummyScope});
        expect(dummyScope.name).toBe('');
    }));
    /*it("Should populate greetMsg on greet", inject(function($controller){
        var dummyScope = {};
        $controller("greetController", {$scope : dummyScope});
        dummyScope.name = "Magesh";
        dummyScope.greet();

        expect(dummyScope.greetMsg).toBe('Hi Magesh, Have a nice day!');
    }));*/
    it("Should call greetService.greet on greet", inject(function($controller){
        //Arrange
        var dummyScope = {};
        var dummyGreetService = {
            greet : function(){}
        };
        spyOn(dummyGreetService, "greet").and.returnValue("A dummy greet msg");

        $controller("greetController", { $scope : dummyScope, greetService : dummyGreetService});

        dummyScope.name = "Magesh";
        dummyScope.greet();

        expect(dummyGreetService.greet).toHaveBeenCalledWith(dummyScope.name);
        expect(dummyScope.greetMsg).toBe("A dummy greet msg");

    }))
});
