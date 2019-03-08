// import preact
import { h, render, Component } from 'preact';

// this component represents the schedule submit form
export default class Overlay extends Component {

	constructor(props){
		super(props);
	}

	// rendering a function when the button is clicked
	render() {
		return (
				<form>
					Time <input type="text" name="time1" size="3"/>  Name of Activity <input type="text" name="activity1" size = "15"/> <br />
					Time <input type="text" name="time2" size="3"/>  Name of Activity <input type="text" name="activity2" size = "15"/> <br />
					Time <input type="text" name="time3" size="3"/>  Name of Activity <input type="text" name="activity3" size = "15"/> <br />
					Time <input type="text" name="time4" size="3"/>  Name of Activity <input type="text" name="activity4" size = "15"/> <br />
				</form>
		);
	}

	clicked(){
		this.setState({show: true});
		console.log("clicked!");
	}
}
