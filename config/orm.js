var connection = require("../config/connection.js");

var orm = {
	create: function(burgerName, cb){
		var queryString = "INSERT INTO burgers SET ?";
		connection.query(queryString, {burger_name: burgerName, devoured: false}, function(error, response){
			if(error){
				console.log(error);
			};
			console.log(response);

			cb(response);        
		});
	};

	retrieve: function(cb){
		var queryString = "SELECT * FROM burgers";
		connection.query(queryString, function(error, response){
			if(error){
				console.log(error);
			}

			cb(response);
		});
	};

	update: function(cb){
		var queryString = "UPDATE burgers (devoured) WHERE "
	}
};

module.exports = orm;