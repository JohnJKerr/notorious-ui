import React, {Component} from 'react';
import "./Nav.scss";

class Nav extends Component {
	render() {
		return (
			<nav className="doc-nav">
				<h2>Notorious</h2>
				<input type="text" />
				<section>
					<h3>Recent</h3>
					<ul>
						<li>File 1</li>
						<li>File 2</li>
					</ul>
				</section>
			</nav>
		);
	}
}

export default Nav;