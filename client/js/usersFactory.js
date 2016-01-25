myModule.factory("usersFactory", function($http){
	return{
		index: function(callback){
			$http.get("/users").success(function(users){
				callback(users);
			})
		},

		create: function(newUser, callback){
			$http.post("/users", newUser).success(callback);
		},

		destroy: function(){
			$http.destroy("/users")
		}
	}
})