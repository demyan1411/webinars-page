import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {
    App,
    Home,
    NotFound
  } from 'containers';

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)
