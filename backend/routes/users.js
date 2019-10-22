const router = require('express').Router();
let User = require('../models/user.model');

router.get('/', (req, res) => {
	User.find()
	.then(users => res.json(users))
	.catch(err => res.status(400));
});

router.post('/add', (req, res) => {
	User.create(req.body)
	.then(() => res.json("user added"))
	.catch(err => res.status(400));
});

module.exports = router;