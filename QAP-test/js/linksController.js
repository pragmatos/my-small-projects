angular.module('App')
	.controller('linksController',['$scope','linksService', function($scope, linksService){
		$scope.links = linksService.links;
		$scope.addedLinks = linksService.addedLinks;
		$scope.user = {};

		$scope.toggleLink = function(item){
			if(!item.added){
				linksService.removeLink(item);				
			}
			else{
				linksService.addLink(item);	
			}
		}
		$scope.addAll = function(type){
			linksService.addAlloftype(type);
		}
		$scope.removeAll = function(type){
			linksService.removeAlloftype(type);
		}
		$scope.removeFromMessage = function(item){
			linksService.removeFromMessage(item);
		}
		$scope.sendForm = function(){
			linksService.Clear();
			alert($scope.user.name +", "+$scope.user.email+", "+$scope.user.text);
			$scope.user = {};
		}
	}]);