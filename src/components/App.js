import React, { Component } from 'react';
import './App.css';
import { Portfolio } from './Portfolio/Portfolio';

class App extends Component {
	constructor () {
		super ();
	}

	render () {
		return (
			<div className="App">
			  	<Portfolio />
			</div>
		);
	}
}

export default App;
