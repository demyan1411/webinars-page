import React, { Component } from 'react'
import { Form } from '../../components'

import { webinars } from '../../webinars.js'

import './webinar.scss'
// console.log(webinars)

export default class Webinar extends Component {

  render() {
    return (
      <div className='webinar'>
        <div className='webinar__content'>
        
          <div className='person'>
            <div className='person__content'>
              <div className='person__text'>Спикер</div>
              <div className='person__name'>Евгений Веранчик</div>
              <div className='person__text'>Руководитель отдела развития “Boomstarter”</div>
            </div>
          </div>
        
          <div className='webinar__title'>
            22 июня 2016, 14:00
            Краудфандинг “Введение”
          </div>
          
          <div className='webinar__text'>
            Пройдите бесплатный обучающий онлайн-курс “Мастер краудфандинга”
            Курс состоит из 35 видеоуроков длительностью 3-7 минут. Видеокурс будет особенно полезен
            тем, кто хочет стать гуру краудфандинга и успешно привлекать деньги на реализацию
            своей идеи.
          </div>
          
          <div className='webinar__text webinar__text--no-margin'>Пройдя онлайн-курс “Мастер краудфандинга” вы узнаете:</div>
          <ol className='webinar__list'>
            <li className='webinar__item'>
              что такое краудфандинг и как это работает;
              как качественно оформить проект: снять видео,
            </li>
            <li className='webinar__item'>
              написать текст, сделать инфографику
              и подобрать вознаграждения;
            </li>
            <li className='webinar__item'>
              как правильно продвигать проект в массы,
              как сделать его популярным и узнаваемым.
            </li>
          </ol>
          
          <Form />
        </div>
      </div>
    )
  }
}
