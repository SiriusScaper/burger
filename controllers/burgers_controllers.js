const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', (req, res) => {
	burger.selectAll(burger => {
		console.log(burger);
		res.render('index', { burgers: burger });
	});
});

router.post('/api/burgers', (req, res) => {
	console.log(req.body);
	burger.insertOne(req.body.burger_name, res => {
		res.redirect('/');
	});
});

router.put('/api/burgers/:id', (req, res) => {
	let condition = `id = ${req.params.id}`;
	burger.updateOne({ devoured: true }, condition, res => {
		console.log(res.body);
		res.redirect('/');
	});
});

module.exports = router;
