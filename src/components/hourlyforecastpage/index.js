// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & all icons
import style from '../iphone/style';
// import necessary components
import RightButton from '../rightbutton';
// import routing library
import {Link} from 'react-router-dom';

export default class HourlyForecastPage extends Component {
  render() {
    return (
      <div class = {style.container}>
        <Link to='/'><RightButton /></Link>
      </div>
    );
  }
}
