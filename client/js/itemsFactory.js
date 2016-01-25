myModule.factory("itemsFactory", function($http){
	return{
		index: function(callback){
			$http.get("/items").success(function(items){
				callback(items);
			})
		}
	}
})