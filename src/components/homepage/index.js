// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & all icons
import style from '../iphone/style';
import style_iphone from '../plusButton/style_iphone';
import settings_style from '../settingsButton/settings_style';
import suggestions_style from '../suggestions/suggestion_style';
import submit_style from '../submitButton/submit_style';
import discard_style from '../discardButton/discard_style';
// import jquery for API calls
import $ from 'jquery';
// import necessary components
import HourlyForecastButton from '../forecastbutton';
import PlusButton from '../plusButton';
import SettingsButton from '../settingsButton';
import Suggestions from '../suggestions';
import Overlay from '../overlay';
import SubmitButton from '../submitButton';
import DiscardButton from '../discardButton';
import Schedule from '../scheduleClass';
// import routing library
import {Link} from 'react-router-dom';
// import Scheduling
import Scheduling from '../scheduling';
import scheduling_style from "../scheduling/scheduling_style";


export default class HomePage extends Component {

		// a constructor with initial set states
		constructor(props){
			super(props);
			// temperature state
			this.state.temp = "";
			this.state.showNewSchedule = false;
			this.state.schedules = new Schedule("Child", {});
			// stores 12-hour forecast information; passed as prop to HourlyForecastPage
			this.state.forecast = new Array();
			this.fetchWeatherData();
			this.fetchForecastData();

			this.state.times = new Array();
			this.state.forecast24 = new Array();
			this.state.conditions = new Array();
		}

		// a call to fetch forecast data via weatherbit
		// API key: 75bc94c0482f4ac295866638dd181c67
		fetchForecastData = () => {
			var url = "https://api.weatherbit.io/v2.0/forecast/hourly?city=London,England&key=75bc94c0482f4ac295866638dd181c67&hours=12";
			$.ajax({
				url: url,
				dataType: "jsonp",
				success : this.parseForecastResponse,
				error : function(req, err){ console.log('API call failed ' + err); }
			})
		}

		// a call to fetch current weather data via openweathermap
		// API key: ed464320b123772d78b0fc7262eff74f
		fetchWeatherData = () => {
			var url = "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=ed464320b123772d78b0fc7262eff74f";
			$.ajax({
				url: url,
				dataType: "jsonp",
				success : this.parseWeatherResponse,
				error : function(req, err){ console.log('API call failed ' + err); }
			})
		}

		// a call to fetch 24-hour forecast data via weatherbit
		// API key: 75bc94c0482f4ac295866638dd181c67
		fetchForecast24Data = () => {
			var url = "https://api.weatherbit.io/v2.0/forecast/hourly?city=London,England&key=75bc94c0482f4ac295866638dd181c67&hours=24";
			$.ajax({
				url: url,
				dataType: "jsonp",
				success : this.parseForecast24Response,
				error : function(req, err){ console.log('API call failed ' + err); }
			})
		}


		newSchedule = () => {
			this.setState({showNewSchedule: true});
		}

		discardOverlay = () => {
			var frm = document.getElementsByName('input-form')[0];
			frm.reset();
			this.setState({showNewSchedule: false});
		}

		submitSchedule = () => {
			this.fetchForecast24Data();
			var name = document.getElementById("name").value;


			var time1 = document.getElementById("time1").value;
			var time2 = document.getElementById("time2").value;
			var time3 = document.getElementById("time3").value;
			var time4 = document.getElementById("time4").value;

			this.state.times.push(time1);
			this.state.times.push(time2);
			this.state.times.push(time3);
			this.state.times.push(time4);

			var activity1 = document.getElementById("activity1").value;
			var activity2 = document.getElementById("activity2").value;
			var activity3 = document.getElementById("activity3").value;
			var activity4 = document.getElementById("activity4").value;

			var activities = {[time1]: activity1,
												[time2]: activity2,
												[time3]: activity3,
												[time4]: activity4};
			var newS = new Schedule(name, activities);
			this.setState({schedules: newS});

			this.setState({showNewSchedule: false});

		}

		// the main render method for the iphone component
		render() {
			// check if temperature data is fetched, if so add the sign styling to the page
			const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;

			// display all weather data
			return (
				<div class={ style.container }>
					<div class={ style.header }>
						<div class={ style.city }>{ this.state.locate }</div>
            <div class={ style.conditions }>{ this.state.cond }</div>
						<span class={ tempStyles }>{ this.state.temp }</span>
					</div>
					<div class={ style.details }></div>

					<div style="text-align:left; margin-left:30px; font-size:24px; margin-bottom:10px; font-family: OpenSans-Light;"><br /> {this.state.schedules.getName()}'s Day </div>
					<div class={style.scheduling}> <Scheduling activity={this.state.schedules.getSchedule()[Object.keys(this.state.schedules.getSchedule())[0]]} time={Object.keys(this.state.schedules.getSchedule())[0]} temp = {this.state.forecast24[0]}/> </div>
					<div class={style.scheduling}> <Scheduling activity={this.state.schedules.getSchedule()[Object.keys(this.state.schedules.getSchedule())[1]]} time={Object.keys(this.state.schedules.getSchedule())[1]} temp = {this.state.forecast24[1]}/> </div>
					<div class={style.scheduling}> <Scheduling activity={this.state.schedules.getSchedule()[Object.keys(this.state.schedules.getSchedule())[2]]} time={Object.keys(this.state.schedules.getSchedule())[2]} temp = {this.state.forecast24[2]}/> </div>
					<div class={style.scheduling}> <Scheduling activity={this.state.schedules.getSchedule()[Object.keys(this.state.schedules.getSchedule())[3]]} time={Object.keys(this.state.schedules.getSchedule())[3]} temp = {this.state.forecast24[3]}/> </div>
					<div class={style.notes}> Notes</div>
					{this.state.showNewSchedule ? (
						<div class={style.overlay}>

						<form name="input-form">
							Name <input type="text" name="name" id="name" size="10" /> <br />
							Time <input type="text" name="time1" size="3" id="time1" />  Name of Activity <input type="text" name="activity1" id="activity1" size = "15"/> <br />
							Time <input type="text" name="time2"  id="time2" size="3"/>  Name of Activity <input type="text" name="activity2"  id="activity2" size = "15"/> <br />
							Time <input type="text" name="time3"  id="time3" size="3"/>  Name of Activity <input type="text" name="activity3"  id="activity3" size = "15"/> <br />
							Time <input type="text" name="time4"  id="time4" size="3"/>  Name of Activity <input type="text" name="activity4"  id="activity4" size = "15"/> <br />
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
								<Link to={{
												pathname: '/hourlyforecast',
												state: {
														forecast: this.state.forecast
												}
										}}>
											<HourlyForecastButton/>
								</Link>
								<PlusButton class={style_iphone.button} click ={this.newSchedule}/ >
						</div>
					</div>
				</div>
			);
		}

		parseForecastResponse = (parsed_forecast_json) => {
				// parse response for temperature, weather description of next 12 hours
				var i;
				for(i = 0; i < 10; i++) {
					this.state.forecast.push(parsed_forecast_json['data'][i]['datetime']);
					this.state.forecast.push(parsed_forecast_json['data'][i]['weather']['description']);
					this.state.forecast.push(parsed_forecast_json['data'][i]['app_temp'])
				}
		}

		parseWeatherResponse = (parsed_json) => {
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

		parseForecast24Response = (parsed_forecast24_json) => {
		console.log(parsed_forecast24_json);
		var time1 = this.state.times[0];
		var time2 = this.state.times[1];
		var time3 = this.state.times[2];
		var time4 = this.state.times[3];
		if (time1.length == 1) {time1 = '0'+time1;}
		if (time2.length == 1) {time1 = '0'+time2;}
		if (time3.length == 1) {time1 = '0'+time3;}
		if (time4.length == 1) {time1 = '0'+time4;}

		var i;
		for (i = 0; i < 24; i++) {
			var input = parsed_forecast24_json['data'][i]['datetime'];
			var fields = input.split(':');
			var front = fields[0];
			var back = fields[1];

			if (time1 == back) { this.state.forecast24.push(parsed_forecast24_json['data'][i]['app_temp']); }
			if (time2 == back) { this.state.forecast24.push(parsed_forecast24_json['data'][i]['app_temp']); }
			if (time3 == back) { this.state.forecast24.push(parsed_forecast24_json['data'][i]['app_temp']); }
			if (time4 == back) { this.state.forecast24.push(parsed_forecast24_json['data'][i]['app_temp']); }

			this.state.conditions.push(parsed_forecast24_json['data'][i]['weather']['description']);
			console.log(this.state.conditions);
		}


	}
}
