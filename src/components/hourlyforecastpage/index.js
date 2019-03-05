// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & all icons
import style from './style';
import style_rightbutton from '../rightbutton/style_rightbutton';
// import necessary components
import RightButton from '../rightbutton';
import ForecastElement from '../forecastelement';
// import routing library
import {Link} from 'react-router-dom';

export default class HourlyForecastPage extends Component {
  render() {
    // this.props.location.state.forecast has 3 pieces of sequential
    // information for every hour (datetime, condition, and temperature)
    return (
      <div class={style.container}>
        <ForecastElement information={(this.props.location.state.forecast).slice(0,3)}/>
        <ForecastElement information={(this.props.location.state.forecast).slice(3,6)}/>
        <ForecastElement information={(this.props.location.state.forecast).slice(6,9)}/>
        <ForecastElement information={(this.props.location.state.forecast).slice(9,12)}/>
        <ForecastElement information={(this.props.location.state.forecast).slice(12,15)}/>
        <ForecastElement information={(this.props.location.state.forecast).slice(15,18)}/>
        <ForecastElement information={(this.props.location.state.forecast).slice(18,21)}/>
        <ForecastElement information={(this.props.location.state.forecast).slice(21,24)}/>
        <ForecastElement information={(this.props.location.state.forecast).slice(24,27)}/>
        <ForecastElement information={(this.props.location.state.forecast).slice(27,30)}/>
        <ForecastElement information={(this.props.location.state.forecast).slice(30,33)}/>
        <ForecastElement information={(this.props.location.state.forecast).slice(33,36)}/>
        <div class={style_rightbutton.rightbutton}>
          <Link to='/'><RightButton/></Link>
        </div>
      </div>
    );
  }
}
