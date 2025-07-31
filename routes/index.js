const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/users', async (req, res) => {
	const users = await User.find();
	console.log("Users: " + users);
	res.json(users);
});

router.get('/users/:id', async (req, res) => {
	// const users = await User.findById(req.params.id);   <=== if searching only by id
	const users = await User.findOne({
		_id: req.params.id,
		age: { $gt: 21 }	// only older then 21 are included
	})
		.select('-_id')
		.exec()
		.then(data => {
			if (!data) {
				res.status(404).send('User not found.');
			} else {
				res.json(data);
			}
		}, err => {
			console.error("Error: ", err.message);
			res.status(500).send('Invalid id provided.');
		});
});

module.exports = router;
