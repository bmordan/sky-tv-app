import React from 'react'
import { Link } from 'react-router-dom'
// 134.209.45.147

class Listings extends React.Component {
  constructor () {
    super()
    this.state = {
      channels: []
    }
  }

  componentWillMount () {
    const request = new window.XMLHttpRequest()
    request.open('GET', 'http://134.209.45.147', true)
    request.setRequestHeader('Access-Control-Allow-Origin', '*')
    request.setRequestHeader('Content-Type', 'application/json')
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText)
        // component.setState({
        //   channels: this.responseText
        // })
      }
    }
    request.send()
  }

  render () {
    return (
      <section>
        <h1>Listings</h1>
        <ul>
          {this.state.channels.map(channel => {
            return (
              <li>
                <Link to='/'>{channel.channelName}</Link>
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}

export default Listings
