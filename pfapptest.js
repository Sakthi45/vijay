var app =angular.module("fbprofile",[]);

app.controller('profcont', ['$scope' , function($scope) {
	$scope.statsres="it";
	$scope.upd = function(str)
	{
		
	$scope.statsres=str;
	}
}]);
app.directive("TestDirective", function() {
  return {
	  
    template : "<h5>Made by ITboys!</h5>"
  };
});

app.factory('MService', function() 
{
	var factory ={};
	
	factory.m = function(a,b) {
		return a+b
	}
	return factory;
});

app.service('CService' , function(MService)
{
	this.update = function(a,b)
		return MService.m(a,b);
}
});

app.controller('profcont', function($scope , CService)
{
	$scope.statsres="temp";
	$scope.update = function()
	{
		$scope.statsres = CService.update($scope.stats,$scope.loc)
	}
});