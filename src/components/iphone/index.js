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

export default class Iphone extends Component {
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
		this.setState({showNewSchedule: !this.state.showNewSchedule});
		var dict = this.state.schedules;
		var name = "Charlie";
		var activities = {"7:00" : "Morning Bus",
				  "12:15": "Recess"};
		var newSchedule = new Schedule(name, activities);
		dict.push(newSchedule);
		this.setState({schedules: dict});

		for (var x = 0; x < this.state.schedules.length; x++){
			var y = this.state.schedules[x];
			console.log(y.getName());
			console.log(y.getSchedule());
		}
	}

	discardOverlay = () => {
		console.log("Discarding Overlay");
		this.setState({showNewSchedule: false});
	}

	submitSchedule = () => {
		var dict = this.state.schedules;
		var name = "Charlie";
		var activities = {"7:00" : "Morning Bus",
				  "12:15": "Recess"};
		var newSchedule = new Schedule(name, activities);
		dict.push(newSchedule);
		console.log(newSchedule.getName());
		this.setState({schedules: dict});
		
		console.log('new thing' + this.state.schedules[0].getName());

		for (var x = 0; x < this.state.schedules.length; x++){
			var y = this.state.schedules[x];
			y.removeActivity("7:00");
			y.addActivity("15:00", "whatver who cares");
			console.log(y.getName());
			console.log(y.getSchedule());
		}

		console.log("submitting schedule...");
	}


	// the main render method for the iphone component
	render() {
		// check if temperature data is fetched, if so add the sign styling to the page
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
		// display all weather data
		return (
			<div class={ style.container }>

				<div class={style.notes}> Notes</div>
				{this.state.showNewSchedule ? (
					<div class={style.overlay}>

					<form>
						Time <input type="text" size="3" ref={(time1) => {this.time1 = time1}}/>  Name of Activity <input type="text" name="activity1" size = "15"/> <br />
						Time <input type="text" name="time2" size="3"/>  Name of Activity <input type="text" name="activity2" size = "15"/> <br />
						Time <input type="text" name="time3" size="3"/>  Name of Activity <input type="text" name="activity3" size = "15"/> <br />
						Time <input type="text" name="time4" size="3"/>  Name of Activity <input type="text" name="activity4" size = "15"/>
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
