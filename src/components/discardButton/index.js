// import preact
import { h, render, Component } from 'preact';

export default class DiscardButton extends Component {

	// rendering a function when the button is clicked
	render() {
		const {discardClick} = this.props;
		return (
			<div>
				<button onClick={discardClick}>
					Discard
				</button>
			</div>
		);
	}
	clicked(){
		console.log("click!");
	}
}
