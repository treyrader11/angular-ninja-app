app.controller('LoginCtrl', ['$scope', '$location', function($scope, $location) {

	var username = $scope.myLogin;
	var password = $scope.myLogin;

	$scope.submit = function($location) {
		console.log('inside submit', username)
		if(username == 'treyrader11' && password == 'Iplayfiddle1') {
			$location.path('/home');
		}
		else if(!username == 'treyrader11' && !password == 'Iplayfiddle1') {
			alert("wrong login information fool");
		}
	}

}]);