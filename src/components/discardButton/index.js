// import preact
import { h, render, Component } from 'preact';

// this component is used to exit from the schedule submit form
export default class DiscardButton extends Component {

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
}
