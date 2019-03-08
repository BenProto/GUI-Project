// import preact
import { h, render, Component } from 'preact';
// import right button icon
import right_button_image from '../../assets/icons/arrowheadright.png';

// this component is used to navigate back to the HomePage from the HourlyForecastPage
export default class RightButton extends Component {
  render() {
    return (
      <img src={right_button_image}/>
    );
  }
}
