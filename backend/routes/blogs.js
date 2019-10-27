const router = require('express').Router();
let Blog = require('../models/blog.model');


router.route('/').get((req, res) => {
	Blog.find()
	.then(() => res.json("user added"))
	.catch(err => res.status(400));
})

router.route('/add').post((req, res) => {
	console.log("this is called", req, res);
	Blog.create(req.body)
	.then(() => res.json("user added"))
	.catch(err => res.status(400));
})

module.exports = router;