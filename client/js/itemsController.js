myModule.controller("itemsController", function(itemsFactory, usersFactory){

	var self = this;

	function getItems(){
		itemsFactory.index(function(items){
			self.items = items;
		})
	}

	function getUsers(){
		usersFactory.index(function(users){
			self.users = users;
			// console.log(self.users)
		})
	}
	getUsers();
	getItems();
})