myModule.factory("bidsFactory", function($http){
	return{
		index: function(callback){
			$http.get("/bids").success(function(bids){
				callback(bids);
			})
		},
		create: function(newBid, callback){
			// console.log(newBid)
			$http.post("/bids", newBid).success(callback);
		}
	}
})