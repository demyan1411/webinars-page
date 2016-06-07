import React, { Component } from 'react'
import { Link } from 'react-router'

import './menu.scss'

export default class Menu extends Component {
  render() {
    return (
      <nav className='menu'>
        <div className='wrapper'>
          <ul className='menu__list'>
            <li className='menu__item'>
              <Link to={''} className='menu__link'>15 июня 2016</Link>
            </li>
            <li className='menu__item'>
              <Link to={''} className='menu__link'>15 июня 2016</Link>
            </li>
            <li className='menu__item'>
              <Link to={''} className='menu__link'>15 июня 2016</Link>
            </li>
            <li className='menu__item'>
              <Link to={''} className='menu__link'>15 июня 2016</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
