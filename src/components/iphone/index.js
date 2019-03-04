// import preact
import { h, render, Component } from 'preact';
// import routing library and pages
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from '../routes';

export default class Iphone extends Component {
	// the main render method for the iphone component
	render() {
		return (
			<Router>
					<Routes />
			</Router>
		);
	}
}
