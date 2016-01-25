var myModule = angular.module("myApp", ["ngRoute"]);

myModule.config(function($routeProvider){
	$routeProvider
	.when("/bidpage", {
		templateUrl: "/partials/bidpage.html",
		controller: "itemsController",
		controllerAs: "itemsCtrl"
	})
	.when("/endpage", {
		templateUrl: "/partials/endpage.html",
		controller: "itemsController",
		controllerAs: "itemsCtrl"
	})
	.when("/",{
		templateUrl: "/partials/login.html",
		controller: "usersController",
		controllerAs: "usersCtrl"
	})
	.otherwise({
		redirectTo: "/"
	})
})