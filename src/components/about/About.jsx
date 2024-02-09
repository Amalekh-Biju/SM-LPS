import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './about.css'
import BG1 from '../../assets/BG-Profile/1.png'
import BG2 from '../../assets/BG-Profile/2.png'
import BG3 from '../../assets/BG-Profile/3.png'
/* Started Pictures From Here */
import Fr from '../../assets/BG-Profile/Pic/Fr.Joseph Mundunadayil.svg'
import Shibimol from '../../assets/BG-Profile/Pic/Shibimol Joseph.svg'
import Aleena from '../../assets/BG-Profile/Pic/ALEENA SHAJU.svg'
import Anumol from '../../assets/BG-Profile/Pic/ANUMOL MATHEW.svg'
import Asha from '../../assets/BG-Profile/Pic/Asha jolly.svg'
import Ashwathy from '../../assets/BG-Profile/Pic/Aswathy Bhaskar.svg'
import Biji from '../../assets/BG-Profile/Pic/Bigi.svg'
import Biya from '../../assets/BG-Profile/Pic/BIYA Antony.svg'
import Dainy from '../../assets/BG-Profile/Pic/Dainy Saju.svg'
import Divya from '../../assets/BG-Profile/Pic/Divya S.svg'
import Gilta from '../../assets/BG-Profile/Pic/GILTA JOSEPH.svg'
import Gincy from '../../assets/BG-Profile/Pic/Gincy Silju.svg'
import Jesty from '../../assets/BG-Profile/Pic/JESTY K ANTONY.svg'
import Joythi from '../../assets/BG-Profile/Pic/Jyothi Thomas SHAJU.svg'
import Leena from '../../assets/BG-Profile/Pic/LEENA ALPHONSE JOSE.svg'
import Manju from '../../assets/BG-Profile/Pic/Manju  Joseph.svg'
import Meenu from '../../assets/BG-Profile/Pic/MEENU C JOHNY.svg'
import Raihanath from '../../assets/BG-Profile/Pic/RAIHANATH K. E.svg'
import Salooja from '../../assets/BG-Profile/Pic/Salooja KM.svg'
import Sebeena from '../../assets/BG-Profile/Pic/SEBEENA G NEDUMCHALIL.svg'
import Soumya from '../../assets/BG-Profile/Pic/Soumya Renjith.svg'
import Sreelatha from '../../assets/BG-Profile/Pic/Sreelatha Suresh.svg'
import Manju_G from '../../assets/BG-Profile/Pic/Manju Graitus.svg'

/* Ended Pictures Import  */

const About = () => {
  return (
    <div class="about-us">
    <div className="header">
    <Header/>   
    </div>
    <div className="us">
    <h1>Our Team</h1>
    <div className="headmistress">
    <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle" src= {BG1}
          />
          <img
            class="img img1" src= {Fr}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Fr. Joseph Mundunadayil</div>
      <div class="title">Manager </div>
    </div>
    </div>
    <div className="headmistress">
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
      <div class="title">Headmistress </div>
    </div>
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
            src= {Sebeena}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Sebeena G</div>
      <div class="title">Teacher - Primary</div>
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
            src= {Aleena}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Aleena Shaji</div>
      <div class="title">Teacher - Primary</div>
    </div>
    <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
            src= {BG2}
          />
          <img
            class="img img3"
            src= {Raihanath}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Raihanath K. E</div>
      <div class="title">Teacher - Primary</div>
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
            src= {Leena}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Leena Alphonse Jose</div>
      <div class="title">Teacher - Primary</div>
    </div>
    <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
            src= {BG2}
          />
          <img
            class="img img3"
            src= {Anumol}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Anumol Mathew</div>
      <div class="title">Teacher - Primary</div>
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
            src= {Salooja}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Salooja K M</div>
      <div class="title">Teacher - Primary</div>
    </div>
    <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
            src= {BG2}
          />
          <img
            class="img img3"
            src= {Divya}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Divya S.</div>
      <div class="title">Teacher - Primary</div>
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
            src= {Meenu}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Meenu C Johny</div>
      <div class="title">Teacher - Primary</div>
    </div>
    <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
            src= {BG2}
          />
          <img
            class="img img3"
            src= {Manju}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Manju Joseph</div>
      <div class="title">Teacher - Primary</div>
    </div><div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
            src= {BG3}
          />
          <img
            class="img img3"
            src= {Joythi}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Joythi Thomas</div>
      <div class="title">Teacher - Primary</div>
    </div>
    <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
            src= {BG2}
          />
          <img
            class="img img3"
            src= {Ashwathy}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Ashwathy Baskar</div>
      <div class="title">Teacher - Primary</div>
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
            src= {Gilta}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Gilta Joseph</div>
      <div class="title">Teacher - Primary</div>
    </div>
    <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
            src= {BG2}
          />
          <img
            class="img img3"
            src= {Jesty}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Jesty K Antony</div>
      <div class="title">Teacher - Primary</div>
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
            src= {Biya}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Biya Antony</div>
      <div class="title">Teacher - Primary</div>
    </div>
    <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
            src= {BG2}
          />
          <img
            class="img img3"
            src= {Asha}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Asha Jolly</div>
      <div class="title">Non - Teaching - Primary</div>
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
            src= {Dainy}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Dainy Saju</div>
      <div class="title">Teacher - Pre Primary</div>
    </div>
    <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
            src= {BG2}
          />
          <img
            class="img img3"
            src= {Gincy}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Gincy Silju</div>
      <div class="title">Teacher - Pre Primary</div>
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
            src= {Biji}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Biji Baby</div>
      <div class="title">Teacher - Pre Primary</div>
    </div>
    <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
            src= {BG2}
          />
          <img
            class="img img3"
            src= {Sreelatha}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Sreelatha Suresh</div>
      <div class="title">Teacher - Pre Primary</div>
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
            src= {Manju_G}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Manju Gratius</div>
      <div class="title">Teacher - Pre Primary</div>
    </div>
    <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
            src= {BG2}
          />
          <img
            class="img img3"
            src= {Soumya}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Soumya Renjith</div>
      <div class="title">Teacher - Pre Primary</div>
    </div>
    </div>
    <div className="footer">
    <Footer />
    </div>
    </div>
  )
}

export default About