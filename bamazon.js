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
	'INSERT INTO Products SET ?', {
		ProductName: "Macbook",
		DepartmentName: "Electronics",
		Price: 2000,
		StockQuantity: 10
	}
)

connection.query(
	'INSERT INTO Products SET ?', {
		ProductName: "Toilet Paper",
		DepartmentName: "Household",
		Price: 2,
		StockQuantity: 15
	}
)

connection.query(
	'INSERT INTO Products SET ?', {
		ProductName: "Chips",
		DepartmentName: "Food",
		Price: 1,
		StockQuantity: 20
	}
)


connection.query(
	'INSERT INTO Products SET ?', {
		ProductName: "Sony Bravia",
		DepartmentName: "Electronics",
		Price: 500,
		StockQuantity: 7
	}
)


connection.query(
	'INSERT INTO Products SET ?', {
		ProductName: "Dishwasher Liquid",
		DepartmentName: "Household",
		Price: 2,
		StockQuantity: 13
	}
)

connection.query(
	'INSERT INTO Products SET ?', {
		ProductName: "Wine",
		DepartmentName: "Food",
		Price: 12,
		StockQuantity: 40
	}
)
