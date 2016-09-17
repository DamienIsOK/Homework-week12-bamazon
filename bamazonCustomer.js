var mysql = require('mysql');
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "Bamazon"
	})

connection.connect(function(err) {
	if(err) throw err;
	console.log("connected as ID: " + connection.threadId);
	})

connection.query(
	'SELECT * FROM Products', function(err, res) {
		for(var i=0; i<res.length; i++) {
			console.log(
				res[i].ProductID + " | " + "Product" + " | " + res[i].ProductName + " | "+ "Department" + " | " + res[i].DepartmentName + " | "+ "Price" + " | " + res[i].Price + " | " + "Stock" + " | " + res[i].StockQuantity);
		}

	})
