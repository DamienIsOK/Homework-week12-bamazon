// ** CODE ON LINE 40 DOES NOT RUN; SEE LINE 40 FOR DETAILS
var inquirer = require('inquirer');
var mysql = require('mysql');
var table = require('ascii-table');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "Bamazon",
})

connection.connect(function(err) {
    if (err) {console.log(err)};
});

function list(){
  connection.query('SELECT * FROM Products ORDER BY ProductID', function(err, response){
    for(var i=0; i<response.length; i++){
      console.log(response[i]);
    }
    prompt();
  });
}

function prompt(){
  inquirer.prompt([{
    type:'input',
    message: 'Which item would you like to purchase?',
    name: 'itemNumber'
  }]).then(function(response){
    inquirer.prompt([{
      type: 'input',
      message: 'How many?',
      name: 'purchaseQuantity'
    }]).then(function(response){
      var getProductsQuery = 'SELECT StockQuantity, Price FROM Products WHERE ProductID = ?';
      connection.query(getProductsQuery, [response.itemNum], function(err, res){
          //** === LINES 40-44 DOES NOT RUN PROPERLY. IT ALWAYS RETURNS THE 'ELSE' OPTION BUT DOESN"T UPDATE MY TABLE
          if(res.StockQuantity < response.purchaseQuantity) {
            console.log('Not enough stock quantity');
          } else {
            console.log('You may purchase this');
            'UPDATE Products SET res.StockQuantity = ' + (res.StockQuantity - response.purchaseQuantity);
          }
          // ===
      });
    });
  });
}

list();