app.controller('NinjaCtrl', ['$scope', '$http', function($scope, $http) {


	

	$scope.addNinja = function() {
		$scope.ninjas.push({
			name: $scope.newNinja.name.charAt(0).toUpperCase() + $scope.newNinja.name.substr(1).toLowerCase(),
			belt: $scope.newNinja.belt,
			rate: parseInt($scope.newNinja.rate),
			available: true

		});
		console.log($scope.newNinja);

		//reset the variables so that the input fields go blank
		$scope.newNinja.name = "";
		$scope.newNinja.belt = "";
		$scope.newNinja.rate = "";
	}

	$scope.removeNinja = function(ninja) {
		var removeNinja = $scope.ninjas.indexOf(ninja);
		var thisNinja = $scope.ninjas[removeNinja];
		
		if(confirm("Are you sure you want to delete " + thisNinja.name + "?")) {
			$scope.ninjas.splice(removeNinja, 1);
		}
	}

	$scope.removeAll = function() {
		$scope.ninjas = [];
	}


	$scope.ninjas = [{
		"name": "Yoshi",
		"belt": "green",
		"rate": 50,
		"available": true,
		"thumb": "images/yoshi.png"
	}, 
	{
		"name": "Crystal",
		"belt": "Yellow",
		"rate": 30,
		"available": true,
		"thumb": "images/crystal.png"
	}, 
	{
		"name": "Ryu",
		"belt": "orange",
		"rate": 10,
		"available": true,
		"thumb": "images/ryu.png"
	}, 
	{
		"name": "Trey",
		"belt": "black",
		"rate": 1000,
		"available": true,
		"thumb": "images/flavicon2.png"
	}, 
	{
		"name": "Shaun",
		"belt": "blue",
		"rate": 500,
		"available": true,
		"thumb": "https://www.shareicon.net/download/2016/04/14/492235_4_256x256.png"
}]

//this is how to use data from external sources
/*
$scope.getNinjas = function() {
	$http.get('../data/ninjas.json')
	.then(function(response) {
		console.log(response);
		$scope.ninjas = response.data.ninjas;
	});
	console.log($scope.ninjas);

}*/



}]);