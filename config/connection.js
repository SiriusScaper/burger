const express = require('express');
const mysql = require('mysql');

//Connection to DB
const connection = mysql.createConnection({
	// DB Properties
	host: 'localhost',
	user: 'root',
	password: 'root',
	port: 8888,
	database: 'burgers_db'
});

//Function to connect
connection.connect(err => {
	if (err) {
		throw err;
	} else {
		console.log('Connected');
	}
});

// Export connection to ORM
module.exports = connection;
