var Users = require("./../controllers/users.js");
var Items = require("./../controllers/items.js");
var Bids = require("./../controllers/bids.js");

module.exports = function(app){
	//users routes
	app.post("/users", Users.create)
	app.get("/users", Users.index)

	// item routes
	app.get("/items", Items.index)


	// bid routes
	app.post("/bids", Bids.create)
	app.get("/bids", Bids.index)

}