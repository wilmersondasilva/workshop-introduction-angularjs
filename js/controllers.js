(function() {
	'use strict';

	angular
		.module("controllers", ["services"])
		.controller("ListCtrl", ["$scope", "EventService", function($scope, EventService) {
			EventService.getAll()
				.success(function(response) {
					$scope.events = response;
				})
				.error(function(error) {
					alert("Deu ruim!");
				});
		}]);
})();