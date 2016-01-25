var express = require("express");
var session = require("express-session")
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname+"/client"));
app.use(session({secret: 'codingdojorocks'}));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);


app.listen(7500, function(){
	console.log("server listening on 7500...");
})