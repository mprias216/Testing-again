import React, {Component} from 'react';

class Results extends Component {
	constructor(props) {
		super();

		this.movie = new URLSearchParams(props.location.search).get('results');
	}

	render() {
		return (
			<ul id="charactersList"></ul>
			);
		}
	}

export default darkKnight;