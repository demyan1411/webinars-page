import React, { Component } from 'react'
import { Form } from '../../components';

export default class Webinar2 extends Component {
  
  render() {
    return (
      <div className='webinar'>
        <div className='webinar__content'>
        
          <div className='person'>
            <div className='person__content'>
              <div className='person__text'>Спикерwerwerwer</div>
              <div className='person__name'>Евгений Веранчик</div>
              <div className='person__text'>Руководитель отдела развития “Boomstarter”</div>
            </div>
          </div>
        
          <div className='webinar__title'>
             QWE QWE QWE
          </div>
          
          <div className='webinar__text'>
            lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem   lorem lorem  vlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  vlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
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
