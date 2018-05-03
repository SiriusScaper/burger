const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', (req, res) => {
	burger.selectAll(burger => {
		console.log(burger);
		res.render('index', { burger: burger });
	});
});

router.post('/api/buger', (req, res) => {
	console.log(req.body);
	burger.insertOne(req.body.burger_name, res => {
		res.status(200).json({ order: 'order up' });
	});
});

router.put('/burgers/update', (req, res) => {
	burger.updateOne(req.body.burger_id, res => {
		console.log(res.body);
		res.redirect('/');
	});
});

module.exports = router;
