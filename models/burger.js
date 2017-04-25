var orm = require("../config/orm.js");

var burger = {
	create: function(newBurger, cb){
		orm.create(newBurger, function(response){
			console.log(response);
			cb(response);
		});
	};

	retrieve: function(cb){
		orm.retrieve(function(response){
			console.log(response);
			cb(response);
		});
	};

};

module.exports = burgerObj;

