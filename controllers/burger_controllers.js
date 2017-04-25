var express = require("express");

var router = express.Router();

var burger = require("../model/burger.js");

router.post("/", function(req, res){
	burger.create(req.body.name, function(){
		res.redirect("/");
	});
});

router.get("/", function(req, res){
	burger.retrieve(function(data){
		console.log(data);
		var burgerObj = {
			burgers: data;
		};
		console.log(burgerObj);
		res.render("index", burgerObj);
	});
});

module.exports = router;

