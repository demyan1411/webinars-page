import React, { Component } from 'react'
import { Footer } from '../../components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { browserHistory } from 'react-router'

import './animate-page.scss'
let transition

export default class App extends Component {
  
  componentDidMount() {
      document.body.addEventListener('wheel', this.handleScroll)
  }
  
  componentWillUnmount() {
    document.body.removeEventListener('wheel', this.handleScroll)
  }
  
  handleScroll(e) {
    if (e.deltaY < -500) {
      transition = 'back'
      browserHistory.goBack()
      // browserHistory.push('/')
    } else if (e.deltaY > 200) {
      transition = 'forward'
      // browserHistory.goForward()
      browserHistory.push('/webinar')
    }
  }
  
  render() {
    return (
      
      <div className='main'>
        <div className='main__content'>
          <ReactCSSTransitionGroup
            component="div"
            transitionName={transition || 'forward'}
            transitionEnterTimeout={850}
            transitionLeaveTimeout={850}
          >
            {React.cloneElement(this.props.children, {
              key: location.pathname
            })}
          </ReactCSSTransitionGroup>
        </div>
        <Footer />
      </div>
      
    )
  }
}
