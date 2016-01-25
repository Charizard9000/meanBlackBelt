var mongoose = require("mongoose");
var Item = mongoose.model("Item");

module.exports = {

	// get items
	index: function(req,res){
		Item.find({}, function(err, items){
			if(err){
				res.send(err);
			} else{
				res.json(items);
			}
		})
	}
}