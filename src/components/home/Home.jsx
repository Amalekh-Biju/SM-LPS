import React from 'react'
import './home.css'
import Header from '../header/Header'
import HomeImg from '../../assets/images/home.png'
import Footer from '../footer/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper/core';
import slide_image_1 from '../../assets/Slideshow/IMG_9650.JPG'
import slide_image_2 from '../../assets/Slideshow/IMG_9632.JPG'
import slide_image_3 from '../../assets/Slideshow/IMG_9633.JPG'
import slide_image_4 from '../../assets/Slideshow/IMG_9634.JPG'
import slide_image_6 from '../../assets/Slideshow/IMG_9636.JPG'
import slide_image_7 from '../../assets/Slideshow/IMG_9637.JPG'
import slide_image_8 from '../../assets/Slideshow/IMG_9638.JPG'
import slide_image_9 from '../../assets/Slideshow/IMG_9639.JPG'
import slide_image_10 from '../../assets/Slideshow/IMG_9640.JPG'
import slide_image_11 from '../../assets/Slideshow/IMG_9641.JPG'
import slide_image_12 from '../../assets/Slideshow/IMG_9642.JPG'
import slide_image_13 from '../../assets/Slideshow/IMG_9643.JPG'
import slide_image_14 from '../../assets/Slideshow/IMG_9644.JPG'
import slide_image_15 from '../../assets/Slideshow/IMG_9645.JPG'
import slide_image_16 from '../../assets/Slideshow/IMG_9646.JPG'
import slide_image_17 from '../../assets/Slideshow/IMG_9647.JPG'
import slide_image_18 from '../../assets/Slideshow/IMG_9648.JPG'
import slide_image_5 from '../../assets/Slideshow/IMG_9650.JPG'
import  { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';


        // install Swiper modules
        SwiperCore.use([Autoplay, Navigation,Pagination ]);
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
                <a href="#more"><button>Read More</button></a>
            </div>
            <div class="image">
              <img src={HomeImg} alt="featured"></img>
            </div >
          </div>
        </div>
        <div className="courses" >
              <h2 id='more'>What We Offer</h2>
              <h1>Our Courses</h1>
              <p>"St. Mary's LP School Kaliyar, a beacon of educational excellence since 1950, 
                provides top-tier education up to standard 4. Under the guidance of the Corporate 
                Educational Agency of Epharchy of Kothamangalam, we nurture young minds for a bright future."</p>
        </div>
        <div className="slideshow">
      <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true} // Enable infinite looping
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={true}
      >
        <SwiperSlide><img src={slide_image_1} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_2} alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_3} alt="Slide 3" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_4} alt="Slide 4" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_5} alt="Slide 5" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_6} alt="Slide 6" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_7} alt="Slide 7" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_8} alt="Slide 8" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_9} alt="Slide 9" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_10} alt="Slide 10" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_11} alt="Slide 11" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_12} alt="Slide 12" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_13} alt="Slide 13" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_14} alt="Slide 14" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_15} alt="Slide 15" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_16} alt="Slide 16" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_17} alt="Slide 17" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_18} alt="Slide 18" /></SwiperSlide>
      </Swiper>
        </div>
    </div>
    <div className="footer">
      <Footer />
    </div>
   </div>
  )
}

export default Home