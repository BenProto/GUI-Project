// import preact
import { h, render, Component } from 'preact';
// import forecast button icon
import hourlyforecast_image from '../../assets/icons/hourlyforecast.png';

export default class ForecastButton extends Component {
  render() {
    return (
      <div id="forecast" style="float:left">
        <img src={hourlyforecast_image}/>
      </div>
    );
  }
}
