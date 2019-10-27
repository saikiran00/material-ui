const router = require('express').Router();
let Blog = require('../models/blog.model');

router.route('/').post((req, res) => {
	Blog.find()
	.then(() => res.json("user added"))
	.catch(err => res.status(400));
})

router.route('/add').post((req, res) => {
	Blog.create(req.body)
	.then(() => res.json("user added"))
	.catch(err => res.status(400));
})

module.exports = router;