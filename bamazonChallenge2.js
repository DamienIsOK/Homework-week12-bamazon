var inquirer = require('inquirer');
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

// connection.query(
// 	'SELECT * FROM Products', function(err, res) {
// 		for(var i=0; i<res.length; i++) {
// 			console.log(
// 				res[i].ProductID + " | " + "Product" + " | " + res[i].ProductName + " | "+ "Department" + " | " + res[i].DepartmentName + " | "+ "Price" + " | " + res[i].Price + " | " + "Stock" + " | " + res[i].StockQuantity);
// 		}

// 	})

var listItems = function () {
  printTable('SELECT * FROM Products ORDER BY ProductID');
}


function lowInventory (){
  printTable('SELECT * FROM Products WHERE stockQty < 5');
}

function addToInventory() {
  listItems();
  inquirer.prompt([{
    type: 'input',
    message: 'input ID of the item to add: ',
    name: 'addId'
  },
  {
    type: 'input',
    message: 'input quantity to add: ',
    name: 'addQty'
  }
  ]).then(function(response){
    var currentStockQty;
    var newStockQty;
    connection.query('SELECT stockQty FROM Products WHERE ?', [{ProductID: response.addId}], function(err, rows){
      if(err) {console.log(err)};
      currentStockQty = rows[0].stockQty;
      console.log("CurrentQty: " + currentStockQty);
      newStockQty = parseInt(response.addQty) + parseInt(currentStockQty);
    });
    // console.log("AddQty: " + typeOf(response.addQty));
    
    connection.query('UPDATE Products SET ? WHERE ?', [{stockQty: newStockQty}, {ProductID: response.addId}], function(err, rows){
      if (err) {console.log(err)};
      console.log(rows);
      console.log("NewQty: " + response.addQty);
    });
  });
}

inquirer.prompt([{
  type: 'rawlist',
  message: 'Pick one: ',
  choices: ['View Products for sale', 'View Low Inventory', 'Add To Inventory', 'Add New Product'],
  name: "choice"
}]).then(function(response){
  console.log(response.choice);
  switch (response.choice) {
    case 'View Products for sale':
      listItems();
      break;

    case 'View Low Inventory':
      lowInventory();
      break;

    case 'Add To Inventory':
      addToInventory();
      break;
  }
});
