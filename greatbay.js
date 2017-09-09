//MOTD
console.log("Hello, this is the Great Bay auction app.")

//Requirements
var mysql =  require('mysql');
var inquirer = require('inquirer');

//Connection strings.
var connectionString = require('./connectionstrings.js');

//User posts an item.
function postItem() {
    console.log("Posting a new item...\n");
    var query = connection.query(
    "INSERT INTO products SET ?",
    {
        title:
        type:
        price:
    }
    function(err, res) {
        console.log(res.affectedRows + " item inserted!\n");
        // Call updateItem AFTER the INSERT completes.
        updateItem();
    }
  );
console.log(query.sql);
}

//Inquire
