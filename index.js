const express = require('express');
const mongoose = require('mongoose');

const app = express();
const router = require('./routes/index');

app.use('', router);

app.listen(3000, () => {
	console.log('Server listening on port 3000');
});

main().catch(err => console.log(err));

async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/users');
}
