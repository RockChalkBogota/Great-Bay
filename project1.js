var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "mastodon",
    database: "great_baydb"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
});

var inquirer = require('inquirer');
console.log("cats");
var output = ["item1", "item2"];

connection.query("SELECT * FROM songs", function(err, result, fields) {
    if (err) throw err;
    result.forEach(function(currentValue, index, array) {
        output.push(result[index].title);
    });
});

inquirer.prompt([
{
	type: 'list',
	name: 'selection',
	message: 'post or bid on an item',
	choices: ['post an item', 'bid on an item']
},
{
	  type: 'input',
	  name: 'post an item',
	  message: 'what item do you want to post?'
},
{
	type: 'list',
	name: 'price bid',
	message: 'select and bid on an item',
	choices: output
}
]).then(function(answers) {
	
	if(answers === 'post an item'){
		inquirer.prompt([
		{
	  type: 'input',
	  name: 'post an item',
	  message: 'what item do you want to post?'
}])
	}
	if(answers === 'bid on an item'){
		console.log("yay!");
	}
	
	console.log(answers);
});
