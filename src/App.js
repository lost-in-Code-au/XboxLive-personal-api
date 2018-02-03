import React, { Component } from 'react'
import './App.css'

class App extends Component {

	_fetchProfile(key, url) {
		console.log('fetching profile data')
		
		fetch(url, {
			method: 'GET',
			headers: new Headers({ 'X-Auth': key,
				'Content-Type': 'application/json'
			})
		}).then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => console.log('Success:', response))
	}

	_fetchGamerCard(key, url) {
		console.log('fetching GamerCard data')
		
		fetch(url, {
			method: 'GET',
			headers: new Headers({ 'X-Auth': key,
				'Content-Type': 'application/json'
			})
		}).then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => console.log('Success:', response))
	}

	_fetchGames(key, url) {
		console.log('fetching games data')
		
		fetch(url, {
			method: 'GET',
			headers: new Headers({ 'X-Auth': key,
				'Content-Type': 'application/json'
			})
		}).then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => console.log('Success:', response))
	}
	
	
	render() {
		// console.log(process.env)
		const key = process.env.REACT_APP_XBOX_API_KEY
		const profileUrl = process.env.REACT_APP_XBOX_LIVE_PROFILE	
		const gamerCardUrl = process.env.REACT_APP_XBOX_LIVE_GAMERCARD	
		const gamesUrl = process.env.REACT_APP_XBOX_LIVE_360GAMELIST	

		this._fetchProfile(key, profileUrl)
		this._fetchGamerCard(key, gamerCardUrl)
		this._fetchGames(key, gamesUrl)

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
