import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Room from './modules/Room'
import NotFound from './modules/NotFound'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/r/:room" component={Room}/>
    <Route path="/about" component={About}/>
    <Route path='*' component={NotFound} />
  </Router>
), document.getElementById('app'))
