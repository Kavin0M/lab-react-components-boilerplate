import React, { Component } from 'react'

class Gallary extends Component {
  render() {
    return (
      <img id={this.props.id} src={this.props.imgUrl} alt="" />
    )
  }
}

export default Gallary
