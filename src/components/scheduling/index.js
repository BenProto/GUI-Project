// import preact
import { h, render, Component } from 'preact';

export default class Scheduling extends Component {

	// rendering a function when the button is clicked

	render() {
			return (
				<div>
				<br />
				 	<div style="font-size:24px;"> {this.props.temp}° <br /> </div>
					<div style="font-size:14px;"> {this.props.activity} <br /> </div>
					<div style="font-size:14px;"> {this.props.time}:00 <br /> </div>
	        <br />
				</div>
			);
	}
}
