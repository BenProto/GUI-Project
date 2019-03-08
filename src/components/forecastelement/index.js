// import preact
import { h, render, Component } from 'preact';
// import stylesheets
import style_forecastelement from './style';
// import necessary components
import TimeElement from './timeelement';

// each ForecastElement is composed of a TimeElement, temperature (plain text),
// and condition (plain text)
export default class ForecastElement extends Component {

  // the datetime, temperature, and condition for the current hour
  // each ForecastElement represents is stored in this.props.information
  render() {
    return (
      <div class={style_forecastelement.wrapper}>
        <div><TimeElement time={(this.props.information)[0]}/></div>
        <text>{(this.props.information)[2]}°</text>
        <text>{(this.props.information)[1]}</text>
      </div>
    );
  }
}
