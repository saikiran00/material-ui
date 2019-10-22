const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
		username:{
			type: String,
			required: true,
		},
		description:{
			type: String,
			required: true,
		},
		status:{
			type: String,
			required: true,
		},
},{
	timestamps: true,
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog; 