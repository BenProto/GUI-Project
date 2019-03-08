// import preact
import { h, render, Component } from 'preact';

// this component is used to display the schedule submit form
export default class PlusButton extends Component {

	state = {show: false};
	constructor(props){
		super(props);
		this.clicked = this.clicked.bind(this);
	}

	// rendering a function when the button is clicked
	render() {
		const {click} = this.props;
		return (
			<div id = "plus" style="float: right">
				<button onClick={click}>
					<img src="./assets/icons/plussmall.png" width="47" onClick={this.clicked}/>
				</button>
			</div>
		);
	}
	
	clicked(){
		this.setState({show: true});
	}
}
