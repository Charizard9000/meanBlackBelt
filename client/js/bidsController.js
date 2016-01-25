myModule.controller("bidsController", function(bidsFactory, usersFactory, itemsFactory){

	var self = this;

	function getBids(){
		bidsFactory.index(function(bids){
			self.bids = bids;
		})
	}

	function getUsers(){
		usersFactory.index(function(users){
			self.users = users;
			console.log(self.users)
		})
	}
	getUsers();
	getBids();

	this.create = function(){
		// console.log(this.newBucket)
		bidsFactory.create(this.newBid, getBids);
	}
})