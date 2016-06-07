import React, { Component } from 'react'
import { Link } from 'react-router'

import './styles.scss'

export default class Home extends Component {
  
  render() {
    const webcam = require('./images/webcam.png');
    const logo = require('./images/logo.png');
    const mouse = require('./images/mouse.png');
    
    return (
      <div className='home'>
        <Link to='/webinar'>webinar</Link>
        <img src={webcam} alt='webcam' className='home__img home__img--webcam' />
        <img src={logo} alt='logo' className='home__img home__img--logo' />
        <div className='home__text'>by BoomStarter</div>
        <img src={mouse} alt='mouse' className='home__img home__img--mouse' />
      </div>
    )
  }
}
