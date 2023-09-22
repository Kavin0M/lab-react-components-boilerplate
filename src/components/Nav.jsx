import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
        <li><a href='#'>{this.props.name}</a></li>
    )
  }
}

export default Nav
