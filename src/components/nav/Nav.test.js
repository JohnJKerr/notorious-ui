import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';

describe('Nav', () => {
	it('renders without crashing', () => {
		// arrange
		const div = document.createElement('div');

		// act/assert
		ReactDOM.render(<Nav />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
