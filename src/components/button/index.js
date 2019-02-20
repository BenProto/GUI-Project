// import preact
import { h, render, Component } from 'preact';

export default class Button extends Component {


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
					<img src="./assets/icons/plus.png" onClick={this.clicked}/>
				</button>
			</div>


		);
	}
	clicked(){
		this.setState({show: true});
		console.log("clicked!");
	}


}
