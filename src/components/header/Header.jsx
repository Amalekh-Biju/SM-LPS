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
              <li><a href="/about">About Us</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="/info">Info</a></li>
              <li><a href="/admissions">Admissions</a></li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Header