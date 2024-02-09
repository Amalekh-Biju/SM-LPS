import React from 'react'
import './info.css'

const Info = () => {
  return (
    <div>
       <header className="header">
        <h1>St. Mary's LP School, Kaliyar</h1>
      </header>

      <main className="main">
        <section className="about">
          <h2>About the School</h2>
          <p>St. Mary's LP School is a prestigious educational institution located in Kaliyar, Idukki district, Kerala. Established in 1950, the school has a rich history of providing quality education to students from diverse backgrounds.</p>
          {/* Add more content about the school here */}
        </section>

        <section className="location">
          <h2>Location</h2>
          <p>Kaliyar p.o, Idukki dist, Kerala 685607</p>
          <p>Phone: 9188131725</p>
          <p>Email: kaliyarsmlps@gmail.com</p>
          <iframe src="https://maps.app.goo.gl/HMrjD5BaeveAJCndA?g_st=iw" ></iframe>
        </section>

        <section className="social-media">
          <h2>Connect with Us</h2>
          <a href="https://www.facebook.com/profile.php?id=100009840092940&mibextid=LQQJ4d" target="_blank">Facebook</a>
          <a href="https://youtube.com/@smlpschoolkaliyar6971?si=pCkScq0wZZP1dF88" target="_blank">YouTube</a>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; Copyright St. Mary's LP School 2024</p>
      </footer>
    </div>
  )
}

export default Info