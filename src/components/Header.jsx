import React, { Component } from 'react'
import Nav from './Nav'

class Header extends Component {
  render() {
    return (
        <header>
        <img className="logo" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt=""></img>
        <nav>
          <ul className='nav_links'>
            <Nav name="Home" />
            <Nav name="About" />
            <Nav name="More" />
          </ul>

        </nav>
        <a className='cta' href='#'><button>Contact</button></a>
        </header>
    )
  }
}

export default Header
