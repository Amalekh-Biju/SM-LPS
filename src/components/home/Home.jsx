import React from 'react'
import './home.css'
import Header from '../header/Header'
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
              <p>"St. Mary's LP School Kaliyar, a beacon of educational excellence since 1950, 
                provides top-tier education up to standard 4. Under the guidance of the Corporate 
                Educational Agency of Epharchy of Kothamangalam, we nurture young minds for a bright future."</p>
              <button>Read More</button>
            </div>
            <div class="image">
              <img src={HomeImg} alt="featured"></img>
            </div >
          </div>
        </div>
        <div className="courses">
              <h2>What We Offer</h2>
              <h1>Our Courses</h1>
              <p>"St. Mary's LP School Kaliyar, a beacon of educational excellence since 1950, 
                provides top-tier education up to standard 4. Under the guidance of the Corporate 
                Educational Agency of Epharchy of Kothamangalam, we nurture young minds for a bright future."</p>
        </div>
    </div>
   </div>
  )
}

export default Home