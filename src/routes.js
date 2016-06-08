import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { webinars_json } from './webinars.js'

import {
    App,
    Home,
    Webinar,
    Webinar2,
    NotFound
  } from 'containers';
  
// <Route path='/webinar' component={Webinar} />
// <Route path='/webinar2' component={Webinar2} />
  
// const webiarRoutes = (
//   <div>
//
//   </div>
// )

// let WebinarRoute = React.creatClass({
//   render() {
//     return <R>
//   }
// })

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      {webinars_json.map(function(webinar) {
        return <Route path={webinar.url} component={Webinar} key={webinar.id} />
      })}
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)
