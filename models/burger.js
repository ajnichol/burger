var orm = require("../config/orm.js");

var burger = {
	create: function(newBurger, cb){
		orm.create(newBurger, function(response){
			console.log(response);
			cb(response);
		});
	},

	read: function(cb){
		orm.read(function(response){
			console.log(response);
			cb(response);
		});
	}

};

module.exports = burger;

