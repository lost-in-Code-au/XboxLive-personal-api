import React, { Component } from 'react'
import './App.css'

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			loading: true,
			error: null,
			gamerCard: null,
			games: null,
			user: null
		}
	}

	_fetchAll() {

		const key = process.env.REACT_APP_XBOX_API_KEY
		const profileUrl = process.env.REACT_APP_XBOX_LIVE_PROFILE	
		const gamerCardUrl = process.env.REACT_APP_XBOX_LIVE_GAMERCARD	
		const gamesUrl = process.env.REACT_APP_XBOX_LIVE_360GAMELIST	

		fetch(profileUrl, {
			method: 'GET',
			headers: new Headers({ 'X-Auth': key,
				'Content-Type': 'application/json'
			})
		}).then(res => res.json())
		.catch(error => console.error('Error:', error) | this.setState({ error: error }))
		.then(response => console.log('Profile:', response) | this.setState({ 
			...this.state,
			user: response 
		}))
		
		fetch(gamerCardUrl, {
			method: 'GET',
			headers: new Headers({ 'X-Auth': key,
				'Content-Type': 'application/json'
			})
		}).then(res => res.json())
		.catch(error => console.error('Error:', error) | this.setState({ error: error }))
		.then(response => console.log('GamerCard:', response) | this.setState({ 
			...this.state,
			gamerCard: response
		 }))
		
		fetch(gamesUrl, {
			method: 'GET',
			headers: new Headers({ 'X-Auth': key,
				'Content-Type': 'application/json'
			})
		}).then(res => res.json())
		.catch(error => console.error('Error:', error) | this.setState({ error: error }))
		.then(response => console.log('Games:', response) | this.setState({           
			...this.state, 
			games: response 
		}))
	}

	
	componentDidMount() {
		this._fetchAll()
	}

	_renderThisPage = () => {

		const text = this.state.loading ? 'Loading...' : 'Loaded'

		if(this.state.loading) {
			return(
				<div className="App">
				<img className="App-img" source='' alt='' />
					<header className="App-header">
					<h1 className="App-title">{text}</h1>
					<p>you are running in {process.env.NODE_ENV}</p>
				</header>
				<p className="App-title">
					Please wait
				</p>
				</div>
			)
		} else if (this.state.error) {
			return(
				<div className="App">
					<header className="App-header">
						
						<p>you are running in {process.env.NODE_ENV}</p>
					</header>
					<p className="App-intro">
						there was a loading error, /n
						{this.state.error}
					</p>
				</div>
			)
		} else {
			return(
				<div className="App">
					<img className="App-img" source={this.state.profile.imageUrl} alt='' />
					<header className="App-header">
						<h1 className="App-title">Welcome to {this.state.gamerCard.gamertag}'s Profile</h1>
						<p>Gamer score: {this.state.gamerCard.gamerscore}</p>
						<p>you are running in {process.env.NODE_ENV}</p>
					</header>
					<p className="App-intro">
					Motto: {this.state.gamerCard.motto}
					</p>
					<p className="App-intro">
					BIO: {this.state.gamerCard.bio }
					</p>
					<p className="App-intro">
					Location: {this.state.gamerCard.location}
					</p>
				</div>
			)
		}
	}

	render() {
		if(this.state.gamerCard !== null &
			this.state.games !== null &
			this.state.user !== null
		){
				console.log('All done!')
				this.setState({...this.state, loading: !this.state.loading})
		}
		return (
			<div>
				{this._renderThisPage()}
			</div>
		)
	}
}

export default App
