// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../plusButton/style_iphone';
import settings_style from '../settingsButton/settings_style';
import suggestions_style from '../suggestions/suggestion_style';
import submit_style from '../submitButton/submit_style';
import discard_style from '../discardButton/discard_style';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import PlusButton from '../plusButton';
import SettingsButton from '../settingsButton';
import Suggestions from '../suggestions';
import Overlay from '../overlay';
import SubmitButton from '../submitButton';
import DiscardButton from '../discardButton';
import Schedule from '../scheduleClass';

import Scheduling from '../scheduling';
import scheduling_style from "../scheduling/scheduling_style";

export default class Iphone extends Component {
//var Iphone = React.createClass({
	// a constructor with initial set states
	constructor(props){
		super(props);
		// temperature state
		this.state.temp = "";
		this.state.showNewSchedule = false;
		// button display state
		this.state.schedules = [];
		this.setState({ display: true});
	}

	// a call to fetch weather data via wunderground
	fetchWeatherData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url = "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=cf17e23b1d108b29a4d738d2084baf5";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
		// once the data grabbed, hide the button
		this.setState({ display: false });
	}

	newSchedule = () => {
		this.setState({showNewSchedule: true});
	}

	discardOverlay = () => {
		console.log("Discarding Overlay");
		var frm = document.getElementsByName('input-form')[0];
		frm.reset();
		this.setState({showNewSchedule: false});
	}

	submitSchedule = () => {
		console.log("submitting schedule...asdf");
		var name = document.getElementById("name").value;
		var time1 = document.getElementById("time1").value;
		var time2 = document.getElementById("time2").value;
		var time3 = document.getElementById("time3").value;
		var time4 = document.getElementById("time4").value;

		var activity1 = document.getElementById("activity1").value;
		var activity2 = document.getElementById("activity2").value;
		var activity3 = document.getElementById("activity3").value;
		var activity4 = document.getElementById("activity4").value;

		var dict = this.state.schedules;
		var activities = {[time1]: activity1,
											[time2]: activity2,
											[time3]: activity3,
											[time4]: activity4};
		var newS = new Schedule(name, activities);
		dict.push(newS);
		this.setState({schedules: dict});
		console.log("Name: " + this.state.schedules[this.state.schedules.length-1].getName());
		console.log(this.state.schedules[this.state.schedules.length-1].getSchedule());

		this.setState({showNewSchedule: false});
		var frm = document.getElementsByName('input-form')[0];
		frm.reset();

	}


	// the main render method for the iphone component
	render() {
		// check if temperature data is fetched, if so add the sign styling to the page
		// display all weather data
		return (
			<div class={ style.container }>
				<div class={style.scheduling}> <Scheduling /> </div>
				<div class={style.scheduling}> <Scheduling /> </div>
				<div class={style.scheduling}> <Scheduling /> </div>
				<div class={style.scheduling}> <Scheduling /> </div>

				<div class={style.notes}> Notes</div>
				{this.state.showNewSchedule ? (
					<div class={style.overlay}>

					<form name="input-form">
						Name <input type="text" name="name" id="name" size="5" /> <br />
						Time <input type="text" name="time1" size="3" id="time1" />  Name of Activity <input type="text" name="activity1" id="activity1" size = "15"/> <br />
						Time <input type="text" name="time2"  id="time2" size="3"/>  Name of Activity <input type="text" name="activity2"  id="activity2" size = "15"/> <br />
						Time <input type="text" name="time3"  id="time3" size="3"/>  Name of Activity <input type="text" name="activity3"  id="activity3" size = "15"/> <br />
						Time <input type="text" name="time4"  id="time4" size="3"/>  Name of Activity <input type="text" name="activity4"  id="activity4" size = "15"/>
					</form>

						<div class={submit_style.overlay}>
							<SubmitButton class={submit_style.button} submitClick={this.submitSchedule}/>
						</div>
						<div class={discard_style.overlay}>
							<DiscardButton class={discard_style.button} discardClick={this.discardOverlay}/>
						</div>
					</div>): null}

				<div class={style.suggestions}>
					<Suggestions /></div>

				<div class={style.bottombar}>
					<div class={style_iphone.bottombar}>
						<PlusButton class={style_iphone.button} click ={this.newSchedule}/ >
						<SettingsButton class={settings_style.SettingsButton} />
					</div>
				</div>

			</div>
		);
	}


	parseResponse = (parsed_json) => {
		var location = parsed_json['name'];
		var temp_c = parsed_json['main']['temp'];
		var conditions = parsed_json['weather']['0']['description'];

		// set states for fields so they could be rendered later on
		this.setState({
			locate: location,
			temp: temp_c,
			cond : conditions
		});
	}
}
