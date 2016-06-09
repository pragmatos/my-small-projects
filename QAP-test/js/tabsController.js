angular.module('App')
	.controller('tabsController',['$scope', function($scope){
		$scope.templates = [
			{ id: 0, url: "first.html" },
			{ id: 1, url: "second.html"}]
		$scope.currentTemplate = $scope.templates[0];

		$scope.selectPage = function(index){
			if ($scope.templates[index].id > $scope.currentTemplate.id) {
            	$scope.moveToLeft = false;
        	} else {
            	$scope.moveToLeft = true;
        	}
			$scope.currentTemplate = $scope.templates[index];
		}
	}]);