import React from 'react';
import './info.css';
import Header from '../header/Header';

const Info = () => {
  return (
   <div className="info">
    <Header className="info-header" />
    <div className="info-container">
      <header className="header-info">
        <h1 className="title">St. Mary's LP School, Kaliyar</h1>
      </header>

      <main className="main">
        <section className="section about">
          <h2 className="section-title">About the School</h2>
          <p className="section-content">St. Mary's LP School is a prestigious educational institution located in Kaliyar, Idukki district, Kerala. Established in 1950, the school has a rich history of providing quality education to students from diverse backgrounds.</p>
        </section>

        <section className="section location">
            <h2 className="section-title">Location</h2>
            <p className="section-content">Kaliyar p.o, Idukki dist, Kerala 685607</p>
            <p className="section-content">Phone: 9188131725</p>
            <p className="section-content-l">Email: kaliyarsmlps@gmail.com</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.4153029364875!2d76.7796043!3d9.9825116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07c1cd547f852b%3A0xfaab388f80f4c1c8!2sSt.%20Mary&#39;s%20L.P.%20School%2C%20Kaliyar!5e0!3m2!1sen!2sin!4v1707440312761!5m2!1sen!2sin" width="600" height="600" margin-top="20px" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
        </section>

        <section className="section social-media">
          <h2 className="section-title">Connect with Us</h2>
          <a href="https://www.facebook.com/profile.php?id=100009840092940&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
          <a href="https://youtube.com/@smlpschoolkaliyar6971?si=pCkScq0wZZP1dF88" target="_blank" rel="noopener noreferrer" className="social-link">YouTube</a>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-text">&copy; Copyright St. Mary's LP School 2024</p>
      </footer>
    </div>
    </div>
  )
}

export default Info;