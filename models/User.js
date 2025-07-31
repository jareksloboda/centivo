const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	_id: mongoose.ObjectId,
	name: String,
	email: String,
	age: {type: Number, min: 0, max: 130}
});

const User = mongoose.model('User', schema);

module.exports = User;
