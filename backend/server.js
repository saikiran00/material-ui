const express = require('express');
var mongoose = require("mongoose");
var cors = require("cors");

mongoose.set('useCreateIndex', true);
const app = express();
const port = process.env.port||4000;

const url = "mongodb://127.0.0.1:27017/ninjago";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

app.use(cors());
app.use(express.json());

const blogRouter = require('./routes/blogs');
const usersRouter = require('./routes/users');

app.use('/blogs', blogRouter);
app.use('/users', usersRouter);

app.listen(port,() => {
	console.log("This is more");
});