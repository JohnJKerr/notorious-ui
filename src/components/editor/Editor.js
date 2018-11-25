import React, {Component} from 'react';
import './Editor.scss';

class Editor extends Component {
	render() {
		return (
			<div className="editor">
				<div contentEditable={true} />
			</div>
		);
	}
}

export default Editor;