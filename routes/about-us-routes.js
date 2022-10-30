const express = require('express');
const About = require('../models/about');
const createPath = require('../helpers/create-path');
const router = express.Router();

/* rout about-us page */
router.get('/about-us', (req, res) => {
    const title = 'About Us';
	About
		.find()
		.then((abouts) => res.render(createPath('about-us'), {
			abouts,
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