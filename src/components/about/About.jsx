import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './about.css'
import BG1 from '../../assets/BG-Profile/1.png'
import BG2 from '../../assets/BG-Profile/2.png'
import BG3 from '../../assets/BG-Profile/3.png'
/* Started Pictures From Here */
import Shibimol from '../../assets/BG-Profile/Pic/Shibimol Joseph.svg'
import Aleena from '../../assets/BG-Profile/Pic/ALEENA SHAJU.svg'
import Anumol from '../../assets/BG-Profile/Pic/ANUMOL MATHEW.svg'
import Asha from '../../assets/BG-Profile/Pic/Asha jolly.svg'
import Ashwathy from '../../assets/BG-Profile/Pic/Aswathy Bhaskar.svg'

import Dainy from '../../assets/BG-Profile/Pic/Dainy Saju.svg'
import Divya from '../../assets/BG-Profile/Pic/Divya S.svg'

/* Ended Pictures Import  */

const About = () => {
  return (
    <div class="about-us">
    <div className="header">
    <Header/>   
    </div>
    <div className="us">
    <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle" src= {BG1}
          />
          <img
            class="img img1" src= {Shibimol}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Shibimol Joseph</div>
      <div class="title">Principal</div>
    </div>
    <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
            src= {BG2}
          />
          <img
            class="img img2"
            src= {Shibimol}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Shibimol Joseph</div>
      <div class="title">Senior </div>
    </div>
    <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
            src= {BG3}
          />
          <img
            class="img img3"
            src= {Shibimol}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Shibimol Joseph</div>
      <div class="title">Senior</div>
    </div>
    <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
            src= {BG3}
          />
          <img
            class="img img3"
            src= {Shibimol}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Shibimol Joseph</div>
      <div class="title">Senior</div>
    </div>
    <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
            src= {BG3}
          />
          <img
            class="img img3"
            src= {Shibimol}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Shibimol Joseph</div>
      <div class="title">Senior</div>
    </div>
    <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
            src= {BG3}
          />
          <img
            class="img img3"
            src= {Shibimol}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Shibimol Joseph</div>
      <div class="title">Senior</div>
    </div>
    <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
            src= {BG3}
          />
          <img
            class="img img3"
            src= {Shibimol}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Shibimol Joseph</div>
      <div class="title">Senior</div>
    </div>
    <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
            src= {BG3}
          />
          <img
            class="img img3"
            src= {Shibimol}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Shibimol Joseph</div>
      <div class="title">Senior</div>
    </div>
    </div>
    <div className="footer">
    <Footer />
    </div>
    </div>
  )
}

export default About