var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	created_at: {type: Date, default: Date.now},
	bids: [{type: Schema.Types.ObjectId, ref: "Item"}]
});

mongoose.model("User", userSchema);