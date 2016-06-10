import React, { Component } from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'

import './home.scss'

export default class Home extends Component {
  
  componentDidMount() {
      document.body.addEventListener('wheel', this.handleScroll)
  }
  
  componentWillUnmount() {
    document.body.removeEventListener('wheel', this.handleScroll)
  }
  
  handleScroll(e) {
    if (e.deltaY > 0) {
      browserHistory.push('/webinar')
    }
  }
  
  render() {
    const webcam = require('./images/webcam.png');
    const logo = require('./images/logo.png');
    const mouse = require('./images/mouse.png');
    
    return (
      <div className='home'>
        <div className='home__content'>
          <img src={webcam} alt='webcam' className='home__img home__img--webcam' />
          <img src={logo} alt='logo' className='home__img home__img--logo' />
          <div className='home__text'>by BoomStarter</div>
          <img src={mouse} alt='mouse' className='home__img home__img--mouse' />
        </div>
      </div>
    )
  }
}
