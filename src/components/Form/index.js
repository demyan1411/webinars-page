import React, { Component } from 'react'

export default class Form extends Component {

  render() {
    return (
      <form className='webinar__form'>
        <input type='text' name='title' className='webinar__input' placeholder='Имя' />
        <input type="text" name='title' className='webinar__input' placeholder='Email' />
        <input type='text' name='title' className='webinar__input' placeholder='Телефон' />
        <button className='webinar__button'>Принять участие</button>
      </form>
    )
  }
}
