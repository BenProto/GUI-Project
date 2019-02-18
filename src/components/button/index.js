// import preact
import { h, render, Component } from 'preact';

export default class Button extends Component {

	// rendering a function when the button is clicked
	render() {

		return (
			<div id = "plus" style="float: right">
				<button onClick={this.clicked}>
					<img src="./assets/icons/plus.png" onClick={this.clicked}/>
				</button>
			</div>
		);
	}
	clicked(){
		console.log("click!");
	}
}
