var inquirer = require('inquirer');
var mysql = require('mysql');
var table = require('ascii-table');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
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
          if(res.StockQuantity > response.purchaseQuantity) {
            console.log("Not enough stock quantity");
          } else {
            var amountOwed = 'SELECT '
            console.log(res.Price * response.purchaseQuantity);
          }
      });
    });
  });
}

prompt();
// list();



// function purchase(){
//   inquirer.prompt([{
//     type: 'input',
//     message: 'Which item would you like to purchase?',
//     name: 'itemNum'
//   }]).then(function(response){
//     inquirer.prompt([{
//       type: 'input',
//       message: 'How many?',
//       name: 'StockQuantity'
//     }]).then(function(res){
//       var query = "SELECT StockQuantity, price FROM Products WHERE ProductID=" + response.itemNum; 
//       connection.query(query, function(er, row){
//         if (er) {console.log(er)};
//         if (row[0].StockQuantity < res.StockQuantity) {
//           console.log("Insufficient quantity in stock!");
//         } else {
//           // This means updating the SQL database to reflect the remaining quantity.
//           query = "UPDATE Products SET StockQuantity = " + (row[0].StockQuantity - res.StockQuantity) + " WHERE ProductID =" + response.itemNum;
//           // console.log(query);
//           connection.query(query, function(error1, res){
//             if(error1){console.log(error1)}
//           });

//           // Once the update goes through, show the customer the total cost of their purchase.
//           var totalCost = res.StockQuantity * row[0].price;
//           console.log(" You owe me: " + totalCost);
//           purchase();
//         }
//       });
//     });
//   });
// }
