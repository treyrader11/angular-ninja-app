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
		"thumb": "http://orig02.deviantart.net/fd73/f/2009/151/b/c/yoshi_ninja_by_gazza1235.jpg"
	}, 
	{
		"name": "Crystal",
		"belt": "Yellow",
		"rate": 30,
		"available": true,
		"thumb": "http://www.clipartkid.com/images/703/cartoon-ninja-pictures-clipart-best-hPOmpz-clipart.jpeg"
	}, 
	{
		"name": "Ryu",
		"belt": "orange",
		"rate": 10,
		"available": true,
		"thumb": "https://s-media-cache-ak0.pinimg.com/originals/fd/97/a7/fd97a74f13c4ae9d9fc33f9f532b9da0.jpg"
	}, 
	{
		"name": "Trey",
		"belt": "black",
		"rate": 1000,
		"available": true,
		"thumb": "https://www.facebook.com/photo.php?fbid=988259817853061&set=a.157601117585606.33614.100000071567790&type=3&theater"
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