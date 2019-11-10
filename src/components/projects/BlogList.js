import React, {Component} from  'react'
import axios from '../../axios.js';
import { Link, useHistory } from "react-router-dom";

class BlogList extends Component{
	componentDidMount() {
	  this.getAllBlogs();
	}
	state = {
		blogs:[]
	}
	getAllBlogs(){
		axios.get('blogs')
		.then(response => {
			this.setState({
				blogs: response.data,
			})
		})
	}
	EditBlog(){
		history.push('/create');
	}

	renderTable(){
		return this.state.blogs.map((blog) => {
			const {_id, title, status, description} = blog
			return (
				<tr key={_id}>
					<td>{title}</td>
					<td>{status}</td>
					<td>{description}</td>
					<td onClick={this.EditBlog}>Edit</td>
				</tr>
			)
		})
	}

	render(){
		return (
			<div>
				<Link to="/create">
	  			<button id="createBlog">Create Blog</button>
	  		</Link>
				<table className="striped container">
					<thead>
						<tr>
							<th>Title</th>
							<th>Slug</th>
							<th>Published</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{this.renderTable()}
					</tbody>
				</table>
			</div>
		)
	}
}

export default BlogList;