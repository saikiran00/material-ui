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
	}
	render(){
		return (
			<div className="container">
				<form>
					<div class="input-field">
						<input type="text" id="title" onChange={this.handleChange} />
						<label htmlFor="title">Title</label>
					</div>

					<div class="input-field">
						<input type="text" id="description" onChange={this.handleChange} />
						<label htmlFor="description">Description</label>
					</div>
					<div class="switch" style={{padding	: 20}}>
				    <label>
				      Published
				      <input type="checkbox" />
				      <span class="lever"></span>
				    </label>
				  </div>
				  <button class="btn waves-effect waves-light" onClick={this.handleSubmit}>Create
				    <i class="material-icons right">send</i>
				  </button>
				</form>
			</div>
		);
	}
}