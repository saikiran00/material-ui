import React, {Component} from 'react';
import axios from '../../axios.js';

export default class EditBlog extends Component{
	componentDidMount() {
	  this.getBlog();
	}
	state={
		title:null,
		description:null,
		published:null,
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	
	getBlog = () => {
		let title = this.props.match.params.id;

		axios.get('blogs/'+title)
		.then(response => {
			console.log("more than ", response.data);
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const payload = this.state;
		axios.post('blogs/update', payload)
	}
	render(){
		return (
			<div className="container">
				<form>
					<div className="input-field">
						<input type="text" id="title" onChange={this.handleChange} />
						<label htmlFor="title">Title</label>
					</div>

					<div className="input-field">
						<input type="text" id="description" onChange={this.handleChange} />
						<label htmlFor="description">Description</label>
					</div>
					<div className="switch" style={{padding	: 20}}>
				    <label>
				      Published
				      <input type="checkbox" id="published" onChange={this.handleChange} />
				      <span className="lever"></span>
				    </label>
				  </div>
				  <button className="btn waves-effect waves-light" onClick={this.handleSubmit}>Update
				    <i className="material-icons right">send</i>
				  </button>
				</form>
			</div>
		);
	}
}