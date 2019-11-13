const router = require('express').Router();
let Blog = require('../models/blog.model');


router.get('/',(req, res) => {
	Blog.find()
	.then((response) => res.json(response))
	.catch(err => res.status(400));
})

router.get('/:id',(req, res) => {
	Blog.findOne({title: req.params.id})
	.then((response) => res.json(response))
	.catch(err => res.status(400));
})

router.post('/add', (req, res) => {
	Blog.create(req.body)
	.then(() => res.json("user added"))
	.catch(err => res.status(400));
})

router.put('/update/:id', (req, res) => {
	Blog.findByTitle(req.params.id)
	.then((exercise)=> { 
		exercise.title = req.body.title;
		exercise.description = req.body.description;
		exercise.save()
	})
	.catch(err => res.status(400));
})

router.put('/delete/:id', (req, res) => {
	Blog.findByTitleAndDelete(req.params.id)
	.then(() => res.json("user added"))
	.catch(err => res.status(400));
})

module.exports = router;