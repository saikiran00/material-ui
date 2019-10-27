import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://127.0.0.1:4000/', 
	headers: { 'Accept': 'application/json,*/*', 
		'Content-Type': 'application/json', 
		'Access-Control-Allow-Origin': '*', 
		'Access-Control-Allow-Headers': 
		'Authorization', 
	}
})

export default instance;