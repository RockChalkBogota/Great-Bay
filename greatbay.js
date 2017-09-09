//MOTD
console.log("Hello, this is the Great Bay auction app.")

//Requirements
var mysql =  require('mysql');
var inquirer = require('inquirer');

//Connection strings.
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "playlistDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
});

//User posts an item.
