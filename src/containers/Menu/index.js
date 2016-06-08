import React, { Component } from 'react'
import { Link } from 'react-router'

import './menu.scss'

export default class Menu extends Component {
  render() {
    return (
      <nav className='menu'>
        <ul className='menu__list'>
        
          <li className='menu__item'>
            <Link to='/webinar' className='menu__link' activeClassName='active'>
              <div className='menu__link-date'>
                15 июня 2016
              </div>
              
              <div className='menu__link-line'></div>
              
              <div className='menu__link-information'>
                22 июня 2016, 14:00 Краудфандинг “Введение”
                <div className='menu__link-shared'>
                  qwe
                </div>
              </div>
            </Link>
          </li>
          
          <li className='menu__item'>
            <Link to='/webinar2' className='menu__link' activeClassName='active'>
              <div className='menu__link-date'>
                15 июня 2016
              </div>
              
              <div className='menu__link-line'></div>
              
              <div className='menu__link-information'>
                22 июня 2016, 14:00 Краудфандинг “Введение”
                <div className='menu__link-shared'>
                  qwe
                </div>
              </div>
            </Link>
          </li>
          
        </ul>
      </nav>
    )
  }
}
