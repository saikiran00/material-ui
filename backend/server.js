const express = require('express');
var mongoose = require("mongoose");
var cors = require("cors");
const app = express();
const blogRouter = require('./routes/blogs');

mongoose.set('useCreateIndex', true);
const port = process.env.port||4000;

const url = "mongodb://127.0.0.1:27017/ninjago";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

app.use(express.json());
app.use(cors());


app.use('/blogs', blogRouter);

app.listen(port,() => {
	console.log("This is more");
});