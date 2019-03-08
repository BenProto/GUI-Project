// import preact
import { h, render, Component } from 'preact';

// this component is used to submit activities to the schedule submit form 
export default class SubmitButton extends Component {

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
