import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './Editor';

describe('Editor', () => {
	it('renders without crashing', () => {
		// arrange
		const div = document.createElement('div');

		// act/assert
		ReactDOM.render(<Editor />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
