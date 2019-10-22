import React, {Component} from  'react'
import { Link } from "react-router-dom";

export default class BlogList extends Component{
	componentDidMount() {
	  this.getAllBlogs();
	}
	state = {
		blogs:[]
	}
	getAllBlogs(){
		fetch(`https://jsonplaceholder.typicode.com/users`)
	}
	renderTable(){
		return this.state.blogs.map((blog) => {
			const {title, slug, published} = blog
			return (
				<tr>
					<td>{title}</td>
					<td>{slug}</td>
					<td>{published}</td>
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