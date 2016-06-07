import React, { Component } from 'react'
import { Menu } from '../../containers'

import './footer.scss'

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='wrapper'>
          <Menu />
          <div className='footer__bottom'>
            <ul className='footer__list'>
              <li className='footer__item'><a href='' className='footer__link'>Помощь</a></li>
              <li className='footer__item'><a href='' className='footer__link'>Правила</a></li>
              <li className='footer__item'><a href='' className='footer__link'>Пользовательское соглашение</a></li>
              <li className='footer__item'><a href='' className='footer__link'>Политика конфиденциальности</a></li>
              <li className='footer__item'><a href='' className='footer__link'>Контакты</a></li>
              <li className='footer__item'><a href='' className='footer__link'>Блог</a></li>
              <li className='footer__item'><a href='' className='footer__link'>Команда</a></li>
            </ul>
            <div className='footer__legal'>© 2012-2016 Boomstarter — ООО «Краудфандинг»</div>
          </div>
        </div>
      </footer>
    )
  }
}
