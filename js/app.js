(function() {
	'use strict';

	angular
		.module("cultura", ["ui.router", "controllers"])
		.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

			$stateProvider
				.state("list", {
					url: "/list",
					templateUrl: "templates/list.html",
					controller: "ListCtrl"
				});

			$urlRouterProvider.otherwise('/list');
		}]);
})()