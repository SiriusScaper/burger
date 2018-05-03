const orm = require('../config/orm.js');

const burger = {
	selectAll: cb => {
		orm.selectAll('burgers', res => cb(res));
	},
	insertOne: (valOfCol, cb) => {
		orm.insertOne('burgers', 'burger_name', valOfCol, res => {
			cb(res);
		});
	},
	updateOne: (valOfCol, id, cb) => {
		orm.updateOne('burgers', 'devoured', valOfCol, id, res => {
			cb(res);
		});
	}
};

module.exports = burger;
