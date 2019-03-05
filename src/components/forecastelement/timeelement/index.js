// import preact
import { h, render, Component } from 'preact';
// import stylesheets
import style from './style';

export default class TimeElement extends Component {

  // this.props.information is a list containing the datetime, condition,
  // and temperature for the current hour this Component represents
  render() {
    return (
      <div class={style.transbox}>
        <p>{(this.props.time).slice(-2)}:00</p>
      </div>
    );
  }
}
