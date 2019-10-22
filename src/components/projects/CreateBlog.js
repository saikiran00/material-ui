import React, {Component} from 'react';
import axios from '../../axios.js';

export default class CreateBlog extends Component{
	state={
		title:null,
		description:null,
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const payload = this.state;
		axios.post('blogs/add', payload)
		.then(res => {
			console.log(res.data);
		})
	}
	render(){
		return (
			<div className="container">
				<form>
					<label htmlFor="first_name">Title</label>
					<input type="text" id="title" onChange={this.handleChange} />
					<label>Description</label>
					<input type="text" id="description" onChange={this.handleChange} />
					<div className="switch">
				    <label>
				      Off
				      <input type="checkbox" />
				      <span className="lever"></span>
				      On
				    </label>
				  </div>

					<button onClick={this.handleSubmit}>Create</button>
				</form>
			</div>
		);
	}
}