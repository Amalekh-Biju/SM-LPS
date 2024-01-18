import React from 'react'
import './header.css'
import LOGO from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="container">
      <div class="landing-page">
        <header>
          <div class="container">
            <a href="/" class="logo"><img src={LOGO} /></a>
            <ul class="links">
              <li><Link to="/">Home </Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/info">Info</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Header