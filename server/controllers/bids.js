var mongoose = require("mongoose");
var User = mongoose.model("User");
var Bid = mongoose.model("Bid");

module.exports = {
	create: function(req, res){

		//first find the user in the DB
		User.findOne({_id: req.body.userID}, function(err, user){
			Item.findOne({_id: req.body.itemID}, function(err, item){
				// console.log(req.body.userID)
				var newBid = new Bid({
					_user: req.body.userID, // ======> associate user with the bid
					_item: req.body.itemID, // ======> associate item with the bid
					amount: req.body.amount
				})	

				user.bids.push(newBid); // ======> add the bid object to the user for use later
				// console.log(newBid)
				newBid.save(function(err, newBid){
					// console.log(err);
					user.save(function(err, user){
						if(err){
							res.send(err);
						} else{
							res.json(true);
						}
					})	
				})
			})
		})

		
	},
	index: function(req,res){
		Bid.find({}).populate("_user").exec(function(err, bids){
			if(err){
				res.send(err);
			} else{
				res.json(bids);
			}
		})
	}
}