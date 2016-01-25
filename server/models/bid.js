var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var bidSchema =  new Schema({
	_user: {type: Schema.Types.ObjectId, ref: "User"},  // user who bid
	_item: {type: Schema.Types.ObjectId, ref: "Item"},	// item being bid on
	amount: Number,										// amount
	created_at: {type: Date, default: Date.now}			// created at
});

mongoose.model("Bid", bidSchema);