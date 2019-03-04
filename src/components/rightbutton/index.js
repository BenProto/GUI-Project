// import preact
import { h, render, Component } from 'preact';
// import right button icon
import right_button_image from '../../assets/icons/arrowheadright.png';

export default class RightButton extends Component {
  render() {
    return (
      <img src={right_button_image}/>
    );
  }
}
