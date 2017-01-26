var app = angular.module('ninjaApp', ['ngMessages', 'ngAnimate', 'ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
	
	//$locationProvider.html5Mode(true);

	$routeProvider
	.when('/', {
		templateUrl: 'views/directory.html',
		controller: 'NinjaCtrl'
	})
	.when('/directory', {
		templateUrl: 'views/directory.html',
		controller: 'NinjaCtrl'
	})
	.when('/contact', {
		templateUrl: 'views/contact.html',
		controller: 'ContactCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});

}]);