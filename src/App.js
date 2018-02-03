import React, { Component } from 'react'
import './App.css'

class App extends Component {
	render() {
		console.log(process.env);
		
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to React</h1>
					<p>you are running in {process.env.NODE_ENV}</p>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		)
	}
}

export default App
