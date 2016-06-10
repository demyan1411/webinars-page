import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { WebinarView } from '../../components'
import * as webinarActions from '../../actions/WebinarActions'
import { find } from 'lodash'
import { webinarsArray } from './webinars.js'


const mapStateToProps = (state) => {
  return {
    webinar: state.webinar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    webinarActions: bindActionCreators(webinarActions, dispatch)
  }
}

let webinarsNameArray = ['']

class Webinar extends Component {
  
  componentWillMount() {
    this.addNameToWebinarsNameArray()

    const { getCurrentWebinar, getPreviousWebinar } = this.props.webinarActions
    const previousWebinarName = webinarsNameArray[0]
    const currentWebinarName = webinarsNameArray[1]
    
    getPreviousWebinar(this.getWebinarObject(previousWebinarName))
    getCurrentWebinar(this.getWebinarObject(currentWebinarName))
  }
  
  addNameToWebinarsNameArray() {
    webinarsNameArray.push(this.props.params.webinar)
    if (webinarsNameArray.length > 2) webinarsNameArray.shift()
  }
  
  getWebinarObject(webinarName) {
    return find(webinarsArray, {name: webinarName})
  }

  render() {
    const { currentWebinar, previousWebinar } = this.props.webinar
    let previousWebinarView = ''
    if (previousWebinar) previousWebinarView = (<WebinarView webinar={previousWebinar} class={'webinars__previous'} />)
    
    return (
      <div className='webinars'>
        {previousWebinarView}
        <WebinarView webinar={currentWebinar} class={'webinars__current'} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Webinar)

