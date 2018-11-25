import React, {Component} from 'react';
import Editor from './components/editor/Editor';
import Nav from './components/nav/Nav';
import './App.scss';

class App extends Component {
	render() {
		return (
			<div className="app">
				<header>
					<h1>Notorious</h1>
				</header>
				<Nav />
				<main>
					<Editor/>
				</main>
			</div>
		);
	}
}

export default App;
