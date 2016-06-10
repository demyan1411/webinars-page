import React, { PropTypes, Component } from 'react'
import { Form } from '../../components'

import './webinar.scss'

export default class WebinarView extends Component {
  
  render() {
    
    const { date, title, text } = this.props.webinar
    const webinarClass = this.props.class

    return (
      <div className={webinarClass}>
        <div className='webinar__content'>
        
          <div className='person'>
            <div className='person__content'>
              <div className='person__text'>Спикер</div>
              <div className='person__name'>Евгений Веранчик</div>
              <div className='person__text'>Руководитель отдела развития “Boomstarter”</div>
            </div>
          </div>
        
          <div></div>
          
          <div className='webinar__title'>{title}</div>
          
          <div className='webinar__text'>{text}</div>
          
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