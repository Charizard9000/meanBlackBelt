var mongoose = require("mongoose");

var User = mongoose.model("User");

module.exports = {

	// create user
	create: function(req, res){
		var newUser = new User({
			name: req.body.name
		})
		
		newUser.save(function(err, newUser){
			if (err){
				res.send(err);
			} else{
				res.json(true);
			}
		})
	},


	// get users
	index: function(req, res){
		
		User.find({}, function(err, users){
			console.log(err);
			if (err){
				res.send(err);
			} else{
				res.json(users);
			}
		})
	}
}