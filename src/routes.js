import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {
    App,
    Home,
    Webinar,
    NotFound
  } from 'containers';

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/webinar' component={Webinar} />
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)
