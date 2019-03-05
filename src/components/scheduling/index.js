// import preact
import { h, render, Component } from 'preact';

export default class Scheduling extends Component {

	// rendering a function when the button is clicked
	render() {

		return (
			<div>
			<br />
				{this.props.activity} <br />
				{this.props.time} <br />
        <br />
			</div>
		);
	}
}
