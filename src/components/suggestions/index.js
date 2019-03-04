// import preact
import { h, render, Component } from 'preact';

export default class Suggestions extends Component {

	// rendering a function when the button is clicked
	render() {

		return (
			<div>
			<ul style='text-align: left'>
				<li>Wear a jacket!</li>
				<li>It's cold out there!</li>
			</ul>
			</div>
		);
	}

}
