import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css';

import langai from './images/langai.jpg';
import mediena from './images/mediena.jpg';
import fanera from './images/fanera2.jpg';
import arrow from './images/arrow2.svg';
import home from './images/home.jpg';

import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Home() {

  useEffect(() => {
    AOS.init();
  }, []);


  const [hovered, setHovered] = useState(false);

    return (
        <div>
        <div className="slider-container">
          <Swiper
            // spaceBetween={50}
            // modules={[Navigation, Pagination]}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            pagination={{ clickable: true }}
            autoplay
          >
            <SwiperSlide>
              <div className="slide-item" style={{ backgroundImage: `url(${langai})`}}>
                <h1 data-aos={'fade-up'}>PLASTIKINIAI LANGAI<br />
                <Link to="/plastikiniai-langai">
                  <motion.div className="button" 
                    onMouseEnter={() => setHovered(true)} 
                    onMouseLeave={() => setHovered(false)}
                    initial={{ marginLeft: 0}}
                    >
                          <motion.img 
                            src={arrow} 
                            className="arrow" 
                            initial={{ x: 0}}
                            animate={{ x: hovered ? 10 : 0 }}
                            alt=""
                          />
                        Daugiau
                    </motion.div>
                    </Link>
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item mediena" style={{ backgroundImage: `url(${mediena})`}}>
              <h1 data-aos={'fade-up'}>STATYBINĖ MEDIENA<br />
                <Link to="/statybine-mediena">
                    <motion.div className="button" 
                    onMouseEnter={() => setHovered(true)} 
                    onMouseLeave={() => setHovered(false)}
                    initial={{ marginLeft: 0}}
                    >
                          <motion.img 
                            src={arrow} 
                            className="arrow" 
                            initial={{ x: 0}}
                            animate={{ x: hovered ? 10 : 0 }}
                          />
                        Daugiau
                    </motion.div>
                  </Link>
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item" style={{ backgroundImage: `url(${fanera})`}}>
              <h1 data-aos={'fade-up'}>FANERA IR APDIRBIMAS<br />
              <Link to="/faneros-pjaustymas">
              <motion.div className="button" 
                    onMouseEnter={() => setHovered(true)} 
                    onMouseLeave={() => setHovered(false)}
                    initial={{ marginLeft: 0}}
                    >
                          <motion.img 
                            src={arrow} 
                            className="arrow" 
                            initial={{ x: 0}}
                            animate={{ x: hovered ? 10 : 0 }}
                          />
                        Daugiau
                    </motion.div>
                    </Link>
                </h1>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="about">
          <div className="wrapper">
            <div className="about-image">
              <img src={home} alt=""/>
            </div>
            <p data-aos={'fade-up'} className="text">
              <h3>APIE MUS</h3>
              UAB „Ukmergės Versmės langų centras” įmonė įkurta 2002 metais ir iki šios dienos gamina vokiškos
              kokybės plastikinius langus iš Rehau profilio. Per visą laikotarpį įmonė nuolat augo ir plėtė savo gamybinius
              pajėgumus. Šiandien nuosavose patalpose Ukmergėje specializuojamės ne tik plastikinių langų gamyboje,
              bet ir iš italų gamintojo „SCM GROUP“ įsigytomis pramoninėmis staklėmis teikiame faneros ir medinių
              plokščių apdirbimo paslaugas, pjauname statybinę medieną nuosavoje lentpjūvėje.
            </p>
          </div>
        </div>
        </div>
    )
}

export default Home