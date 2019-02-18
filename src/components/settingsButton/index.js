// import preact
import { h, render, Component } from 'preact';

export default class SettingsButton extends Component {

	// rendering a function when the button is clicked
	render() {

		return (
			<div id="setting" style="float: left">
				<button>
					<img src="./assets/icons/settings.png" onClick={this.clicked}/>
				</button>
			</div>
		);
	}
	clicked(){
		console.log("click!");
	}
}
