import React, {Component} from 'react'
import Slide from './Slide'
import raf from 'raf'


class Slider extends Component {

  constructor(){
    super();
    this.state = {
      background: [
        {'imageUrl': 'http://198.58.109.189/wp-content/uploads/2017/11/Carbon-Fiber.jpg'},
        {'imageUrl': 'http://198.58.109.189/wp-content/uploads/2017/11/RRW-178-Edit.jpg'},
        {'imageUrl': 'http://198.58.109.189/wp-content/uploads/2017/11/Seared-Ahi-Avocado-Salad-2.jpg'},
        {'imageUrl': 'http://198.58.109.189/wp-content/uploads/2017/11/Cocohodo_Hero_2880x2304.jpg'},
        {'imageUrl': 'http://198.58.109.189/wp-content/uploads/2017/11/5D2_0020-2.jpg'}
      ],
      currentImg: 0,
      interval: null
    }
  }

  componentDidMount() {
    this.setState({interval: window.setInterval(this.changeCurrent.bind(this), 3000)})
  }
  componentWillUnmount () {
    clearInterval(this.state.interval)
  }

  changeCurrent () {
    let currentImg = this.state.currentImg;
    let lastImg = this.state.background.length - 1;

    if (currentImg !== lastImg) {
        currentImg++;
        this.setState({currentImg: currentImg});
    } else {
        currentImg = 0;
        this.setState({currentImg: currentImg});
    }
  }

  render() {
    return (
      <div className="slideshow">
        <Slide
          background={this.state.background}
          current={this.state.currentImg} />
        <style jsx>{`
          .slideshow {
            overflow: hidden;
            z-index: -1;
          }
        `}</style>
      </div>
     )
   }
}

export default Slider
