const connection = require('../config/connection.js');

const orm = {
	selectAll: (tableInput, cb) => {
		let queryString = `SELECT * FROM ${tableInput};`;
		connection.query(queryString, (err, res) => {
			if (err) throw err;
			cb(res);
		});
	},
	insertOne: (tableInput, colToSearch, valOfCol, cb) => {
		let queryString = `INSERT INTO ??(??) VALUES(?)`;
		connection.query(
			queryString,
			[tableInput, colToSearch, valOfCol],
			(err, res) => {
				if (err) throw err;
				cb(res);
			}
		);
	},
	updateOne: (tableInput, colToSearch, valOfCol, id, cb) => {
		let queryString = `UPDATE ?? SET ?? = ? WHERE id = ?`;
		connection.query(
			queryString,
			[tableInput, colToSearch, valOfCol, id],
			(err, res) => {
				if (err) throw err;
				cb(res);
			}
		);
	}
};

module.exports = orm;
// var orm = {
// 	all: function(tableInput, cb) {
// 		var queryString = 'SELECT * FROM ' + tableInput + ';';
// 		connection.query(queryString, function(err, result) {
// 			if (err) {
// 				throw err;
// 			}
// 			cb(result);
// 		});
// 	},
// 	create: function(table, cols, vals, cb) {
// 		var queryString = 'INSERT INTO ' + table;

// 		queryString += ' (';
// 		queryString += cols.toString();
// 		queryString += ') ';
// 		queryString += 'VALUES (';
// 		queryString += printQuestionMarks(vals.length);
// 		queryString += ') ';

// 		console.log(queryString);

// 		connection.query(queryString, vals, function(err, result) {
// 			if (err) {
// 				throw err;
// 			}

// 			cb(result);
// 		});
// 	},
// 	// An example of objColVals would be {name: panther, sleepy: true}
// 	update: function(table, objColVals, condition, cb) {
// 		var queryString = 'UPDATE ' + table;

// 		queryString += ' SET ';
// 		queryString += objToSql(objColVals);
// 		queryString += ' WHERE ';
// 		queryString += condition;

// 		console.log(queryString);
// 		connection.query(queryString, function(err, result) {
// 			if (err) {
// 				throw err;
// 			}

// 			cb(result);
// 		});
// 	}
// };

// // Export the orm object for the model (cat.js).
// module.exports = orm;
