import React, { Component } from 'react'
import { Footer } from '../../components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { WebinarView } from '../../components'
import * as webinarActions from '../../actions/WebinarActions'

import './animate-page.scss'

export default class App extends Component {
  
  render() {
    return (
      
      <div className='main'>
        {React.cloneElement(this.props.children, {
          key: location.pathname
        })}
        <Footer />
      </div>
      
    )
  }
}

