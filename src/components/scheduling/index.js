// import preact
import { h, render, Component } from 'preact';

export default class Scheduling extends Component {

	// rendering a function when the button is clicked
	render() {

		return (
			<div>
			<ul style='text-align: left'>
				<li>Activity: {this.props.activity}</li>
				<li>Time: {this.props.time}</li>
        <li>Weather</li>
			</ul>
			</div>
		);
	}
}
