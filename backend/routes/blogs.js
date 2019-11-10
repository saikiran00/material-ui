const router = require('express').Router();
let Blog = require('../models/blog.model');


router.get('/',(req, res) => {
	Blog.find()
	.then((response) => res.json(response))
	.catch(err => res.status(400));
})

router.route('/add').post((req, res) => {
	Blog.create(req.body)
	.then(() => res.json("user added"))
	.catch(err => res.status(400));
})

module.exports = router;