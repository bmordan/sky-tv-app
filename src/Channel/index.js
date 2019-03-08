import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Channel extends Component {
  render () {
    return (
      <section>
        <nav><Link to='/'>Listings</Link></nav>
        <h1>{this.props.match.params.channel}</h1>
      </section>
    )
  }
}

export default withRouter(Channel)
