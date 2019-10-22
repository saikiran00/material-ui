const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.get('/', (req, res) => {
	Exercise.find()
	.then(exercises => res.json(exercises))
	.catch(err => res.status(400));
});

router.post('/add', (req, res) => {
	Exercise.create(req.body)
	.then(() => res.json("exercise added"))
	.catch(err => res.status(400));
});

module.exports = router;