// import preact
import { h, render, Component } from 'preact';

export default class ForecastElement extends Component {

  // this.props.information is a list containing the datetime, condition,
  // and temperature for the current hour this Component represents
  render() {
    return (
      <div>
        {(this.props.information)[0]}
        {(this.props.information)[1]}
        {(this.props.information)[2]}
      </div>
    );
  }
}
