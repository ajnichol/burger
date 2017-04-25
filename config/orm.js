var connection = require("../config/connection.js");

var orm = {
	burgerAdder: function(burgerName){
		var queryString = "INSERT INTO burgers SET ?";
		connection.query(queryString, {burger_name: burgerName, devoured: false}, function(error, response){
			if(error){
				console.log(error);
			};
			console.log(response);
		});
	};

	getBurgers: function(cb){
		var queryString = "SELECT * FROM burgers";
		connection.query(queryString, function(error, response){
			if(error){
				console.log(error);
			}

			cb(response);
		});
	};

	burgerState: function(cb){
		var queryString = "UPDATE burgers (devoured) WHERE "
	}
};