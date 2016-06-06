import React, { Component } from 'react'
import { Menu, Footer } from '../../components'

export default class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        {this.props.children}
        <Menu />
        <Footer />
      </div>
    )
  }
}
