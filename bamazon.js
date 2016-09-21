// ** QUESTION AT THE BOTTOM OF THIS PAGE
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

connection.query(
	'INSERT INTO Products SET ?', {
		ProductName: "Onitsuka Tiger shoes",
		DepartmentName: "Clothing",
		Price: 65,
		StockQuantity: 100
	}
)

connection.query(
	'INSERT INTO Products SET ?', {
		ProductName: "A Monster Calls novel",
		DepartmentName: "Books",
		Price: 2,
		StockQuantity: 15
	}
)

connection.query(
	'INSERT INTO Products SET ?', {
		ProductName: "Pajama pants",
		DepartmentName: "Clothing",
		Price: 1,
		StockQuantity: 20
	}
)

connection.query(
	'INSERT INTO Products SET ?', {
		ProductName: "Pancake mix",
		DepartmentName: "Food",
		Price: 500,
		StockQuantity: 7
	}

)

// ** QUESTION: EACH TIME I RUN AN UPDATE QUERY, MY PRICE IS SET TO 9.99 -- EVEN IF I HAVE ALL OTHER CODE COMMENTED OUT. WHY?
connection.query(
	'UPDATE Products SET ? WHERE ?', [{
	Price: 75
}, {
	ProductID: 25
	}]);
