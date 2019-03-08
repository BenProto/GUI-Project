// import preact
import { h, render, Component } from 'preact';

// this component represents the suggestions given based on the weather
export default class Suggestions extends Component {

	// rendering a function when the button is clicked
	render() {

		if (this.props.display == true) {
			return (
				<div>
				<ul style='text-align: left'>
					<li>It's going to rain today, bring an umbrella!</li>
					<li>It's going to be cold out there, wear a jacket!</li>
				</ul>
				</div>
			);
		} 
	}

}
