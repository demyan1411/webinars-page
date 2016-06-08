import React, { Component } from 'react'
import { Footer } from '../../components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './animate-page.scss'

export default class App extends Component {
  
  render() {
    // console.log(this.props.children);
    return (
      
      <div className='main'>
        <ReactCSSTransitionGroup
          component="div"
          className="main__content"
          transitionName={'forward'}
          transitionEnterTimeout={850}
          transitionLeaveTimeout={850}
        >
          {React.cloneElement(this.props.children, {
            key: location.pathname
          })}
        </ReactCSSTransitionGroup>
        <Footer />
      </div>
      
    )
  }
}

