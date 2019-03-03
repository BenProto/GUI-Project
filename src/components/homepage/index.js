// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & all icons
import style from '../iphone/style';
// import jquery for API calls
import $ from 'jquery';
// import necessary components
import HourlyForecastButton from '../forecastbutton';
// import routing library
import {Link} from 'react-router-dom';


export default class HomePage extends Component {

		// a constructor with initial set states
		constructor(props){
			super(props);
			// temperature state
			this.state.temp = "";
			this.fetchWeatherData();
			this.fetchForecastData();
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
		fetchWeatherData = () => {
			var url = "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=ed464320b123772d78b0fc7262eff74f";
			$.ajax({
				url: url,
				dataType: "jsonp",
				success : this.parseWeatherResponse,
				error : function(req, err){ console.log('API call failed ' + err); }
			})
		}

		// the main render method for the iphone component
		render() {
			// check if temperature data is fetched, if so add the sign styling to the page
			const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;

			// display all weather data
			return (
				<div class={ style.container }>
          <Link to='/hourlyforecastpage'><HourlyForecastButton/></Link>
					<div class={ style.header }>
						<div class={ style.city }>{ this.state.locate }</div>
            <div class={ style.conditions }>{ this.state.cond }</div>
						<span class={ tempStyles }>{ this.state.temp }</span>
					</div>
					<div class={ style.details }></div>
				</div>
			);
		}

		parseForecastResponse = (parsed_forecast_json) => {
				// stores 12-hour forecast information; passed as prop to HourlyForecastPage
				var forecast = new Array();

				// parse response for temperature, weather description of next 12 hours
				var i;
				for(i = 0; i < 12; i++) {
					forecast.push(parsed_forecast_json['data'][i]['datetime']);
					forecast.push(parsed_forecast_json['data'][i]['weather']['description']);
					forecast.push(parsed_forecast_json['data'][i]['app_temp'])
				}
				console.log(forecast);
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
}
