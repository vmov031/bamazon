var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password:  "",
	database: "bamazon"
});

connection.connect(function(err) {
	if (err) throw err;
	productOptions ();
});

function productOptions() {
	connection.query("SELECT * FROM products" , function(err, res) {
		if (err) throw err;
		console.log(res);
		firstPurchase();
	});
}

function firstPurchase() {

	inquirer.prompt([
		name: "productID",
		type: "list",
		choices: function() {
			var choiceArray = [];
			for (var i = 0; i < results.length; i++) {
				choiceArray.push(results[i].item_id.toString());
			}
			return choiceArray;
		},
		message: "What is the ID of the product you'd like to purchase?",
	}
	{
		name: "quantity",
		type: "input",
		message: "How many of this item would you like to buy?",
		validate: function(value) {
			if (isNaN(value) === false) {
				return true;
			}
			return "Please enter a valid number for the amount.";
		}
	}

	])
	.then(function(answer) {

		var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_id === parseInt(answer.item_id, 11)) {
            chosenItem = results[i];
          }
        }
		checkProduct(answers.productID, answers.quantity);
	});

}