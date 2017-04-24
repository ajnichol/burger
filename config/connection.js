//Setting up MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
	port:3306;
	host: "localhost",
	user: "root",
	password: "root",
	database: "burgers_db"
});

//Connecting to MySQL
connection.connect(function(error){
	if(error){
		console.log("error connecting: " + err.stack);
	}else{
		console.log("connected as id " + connection.threadId);
	}
});

//Export our database connection for our ORM queries 
module.exports = connection;