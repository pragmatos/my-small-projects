angular.module('App')
	.service('linksService',[function(){
		var vm = this;

		vm.addedLinks = [];

		vm.addLink = function(o){
			vm.addedLinks.unshift(o);
		}
		vm.removeLink = function(o){
			vm.addedLinks.splice(vm.addedLinks.indexOf(o),1);
		}
		vm.addAlloftype = function(type){
			angular.forEach(vm.links, function(item) {
				if(item.type === type)
					if(!item.added){
						item.added = true;
						vm.addLink(item);
					}
			});
		}
		vm.removeAlloftype = function(type){
			angular.forEach(vm.links, function(item) {
				if(item.type === type){
					vm.addedLinks.splice(vm.addedLinks.indexOf(item),1);
					item.added = false;
				}
			});
		}
		vm.removeFromMessage = function(item){
			vm.links[vm.links.indexOf(item)].added = false;
			vm.addedLinks.splice(vm.addedLinks.indexOf(item),1);
		}
		vm.Clear = function(){
			angular.forEach(vm.addedLinks, function(item) {
				vm.links[vm.links.indexOf(item)].added = false;
			});
			vm.addedLinks.splice(0);
		}
		vm.links = [
			{ 
				id : 0,
			  	title: "Article 0",
			  	desc: "Authors, name of edition,publishing year, (more info?)",
			  	type: 0,
			  	added: false
			},
			{ 
				id : 1,
			  	title: "Article 1",
			  	desc: "Authors, name of edition,publishing year, (more info?)",
			  	type: 1,
			  	added: false
			},
			{ 
				id : 2,
			  	title: "Article 2",
			  	desc: "Authors, name of edition,publishing year, (more info?)",
			  	type: 1,
			  	added: false
			},
			{ 
				id : 3,
			  	title: "Article 3",
			  	desc: "Authors, name of edition,publishing year, (more info?)",
			  	type: 2,
			  	added: false
			},
			{ 
				id : 4,
			  	title: "Article 4",
			  	desc: "Authors, name of edition,publishing year, (more info?)",
			  	type: 1,
			  	added: false
			},
			{ 
				id : 5,
			  	title: "Article 5",
			  	desc: "Authors, name of edition,publishing year, (more info?)",
			  	type: 0,
			  	added: false
			},
			{ 
				id : 6,
			  	title: "Article 6",
			  	desc: "Authors, name of edition,publishing year, (more info?)",
			  	type: 0,
			  	added: false
			},
			{ 
				id : 7,
			  	title: "Article 7",
			  	desc: "Authors, name of edition,publishing year, (more info?)",
			  	type: 0,
			  	added: false
			},
			{ 
				id : 8,
			  	title: "Article 8",
			  	desc: "Authors, name of edition,publishing year, (more info?)",
			  	type: 0,
			  	added: false
			},{ 
				id : 9,
			  	title: "Article 9",
			  	desc: "Authors, name of edition,publishing year, (more info?)",
			  	type: 0,
			  	added: false
			},{ 
				id : 10,
			  	title: "Article 10",
			  	desc: "Authors, name of edition,publishing year, (more info?)",
			  	type: 0,
			  	added: false
			},
			{ 
				id : 11,
			  	title: "Article 11",
			  	desc: "Authors, name of edition,publishing year, (more info?)",
			  	type: 0,
			  	added: false
			},
			{ 
				id : 12,
			  	title: "Article 12",
			  	desc: "Authors, name of edition,publishing year, (more info?)",
			  	type: 0,
			  	added: false
			},
			{ 
				id : 13,
			  	title: "Article 12",
			  	desc: "Authors, name of edition,publishing year, (more info?)",
			  	type: 1,
			  	added: false
			},
			{ 
				id : 14,
			  	title: "Article 14",
			  	desc: "Authors, name of edition,publishing year, (more info?)",
			  	type: 1,
			  	added: false
			},
			{ 
				id : 15,
			  	title: "Article 15",
			  	desc: "Authors, name of edition,publishing year, (more info?)",
			  	type: 1,
			  	added: false
			},
			{ 
				id : 16,
			  	title: "Article 16",
			  	desc: "Authors, name of edition,publishing year, (more info?)",
			  	type: 1,
			  	added: false
			},
			{ 
				id : 17,
			  	title: "Article 17",
			  	desc: "Authors, name of edition,publishing year, (more info?)",
			  	type: 2,
			  	added: false
			},
			{ 
				id : 18,
			  	title: "Article 18",
			  	desc: "Authors, name of edition,publishing year, (more info?)",
			  	type: 2,
			  	added: false
			},
			{ 
				id : 19,
			  	title: "Article 19",
			  	desc: "Authors, name of edition,publishing year, (more info?)",
			  	type: 2,
			  	added: false
			},
			{ 
				id : 5,
			  	title: "Article 5",
			  	desc: "Authors, name of edition,publishing year, (more info?)",
			  	type: 1,
			  	added: false
			}
		];

		

	}]);