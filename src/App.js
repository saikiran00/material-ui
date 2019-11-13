import React, {Component} from 'react';
import {BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import BlogList from './components/projects/BlogList';
import CreateBlog from './components/projects/CreateBlog';
import EditBlog from './components/projects/EditBlog';

class App extends Component {

	render(){
	  return (
	  	<div>
		    <BrowserRouter>
		    	<div className="App">
		    		<Navbar />
		    		<Route exact path="/" component={BlogList} />
		    		<Route path="/create" component={CreateBlog} />
		    		<Route path="/edit/:id" component={EditBlog} />
		    	</div>
		    </BrowserRouter>
	    </div>
	  );
	}
}

export default App;
