const express = require('express');
const Home = require('../models/home');
const createPath = require('../helpers/create-path');
const router = express.Router();

/* rout index page */
router.get('/', (req, res) => {
	const title = 'Home';
	Home
		.find()
		.then((homes) => res.render(createPath('index'), {
			homes,
			title
		}))
		.catch((error) => {
			console.log(error);
			res.render(createPath('error'), {
				title: 'Error'
			});
		});
});

module.exports = router;