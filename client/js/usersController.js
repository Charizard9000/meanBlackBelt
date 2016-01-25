myModule.controller("usersController", function(usersFactory, $location){
	
	var self = this;

	function getUsers(){
		usersFactory.index(function(users){
			self.users = users;
		})
	}

	getUsers();


	this.create = function(){
		//alert("hello");
		//console.log(this.newUser);
		usersFactory.create(this.newUser, getUsers);
		$location.path("/bidpage");
	}

	this.remove = function(){
		usersFactory.destroy();
	}
})