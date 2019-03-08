import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Listings from './Listings'
import Channel from './Channel'

const routes = (
  <Router>
    <main>
      <Route exact path='/' component={Listings} />
      <Route path='/:channel' component={Channel} />
    </main>
  </Router>
)

ReactDOM.render(routes, document.getElementById('root'))
