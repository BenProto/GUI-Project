// import preact
import { h, render, Component } from 'preact';
// import stylesheets
import style from '../iphone/style';
import style_forecastelement from './style';
// import necessary components
import TimeElement from './timeelement';

// each ForecastElement is composed of a TimeElement, TemperatureElement,
// and ConditionElement
export default class ForecastElement extends Component {

  // this.props.information is a list containing the datetime, condition,
  // and temperature for the current hour this Component represents
  render() {
    return (
      <div class={style_forecastelement.wrapper}>
        <div><TimeElement time={(this.props.information)[0]}/></div>
        <text>{(this.props.information)[2]}°C</text>
        <text>{(this.props.information)[1]}</text>
      </div>
    );
  }
}
