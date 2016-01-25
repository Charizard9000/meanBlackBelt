var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var itemSchema = new Schema({
	name: String,
	high_bid: Number,
	created_at: {type: Date, default: Date.now},
});

mongoose.model("Item", itemSchema);