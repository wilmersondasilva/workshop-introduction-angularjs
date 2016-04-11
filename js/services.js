(function() {
	'use strict';

	angular
		.module("services", [])
		.factory("EventService", ["$http", function($http) {

			return {
				getAll: function() {
					return $http.get("mocks/events.json");
				}
			};
		}]);
})()