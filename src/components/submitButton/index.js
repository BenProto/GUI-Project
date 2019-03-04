// import preact
import { h, render, Component } from 'preact';

export default class SubmitButton extends Component {

	// rendering a function when the button is clicked
	render() {
		const {submitClick} = this.props;
		return (
			<div>
				<button onClick={submitClick}>
					Submit
				</button>
			</div>
		);
	}
	clicked(){
		console.log("click!");
	}
}
