import React from 'react'
import './home.css'
import Header from '../header/Header'
import BG1 from '../../assets/images/BG.jpg'
import HomeImg from '../../assets/images/home.png'

const Home = () => {
  return (
    <div className="home">
      <div className="header"><Header /></div>
      <div class="landing-page">
      <div class="content">
          <div class="container">
            <div class="info">
              <h2>Welcome To</h2>
              <h1>St. Mary's LP School</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</p>
              <button>Read More</button>
            </div>
            <div class="image">
              <img src={HomeImg}></img>
            </div >
          </div>
        </div>
    </div>
   </div>
  )
}

export default Home