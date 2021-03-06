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
              <h1 data-aos={'fade-up'}>STATYBIN?? MEDIENA<br />
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
              UAB ???Ukmerg??s Versm??s lang?? centras??? ??mon?? ??kurta 2002 metais ir iki ??ios dienos gamina voki??kos
              kokyb??s plastikinius langus i?? Rehau profilio. Per vis?? laikotarp?? ??mon?? nuolat augo ir pl??t?? savo gamybinius
              paj??gumus. ??iandien nuosavose patalpose Ukmerg??je specializuojam??s ne tik plastikini?? lang?? gamyboje,
              bet ir i?? ital?? gamintojo ???SCM GROUP??? ??sigytomis pramonin??mis stakl??mis teikiame faneros ir medini??
              plok????i?? apdirbimo paslaugas, pjauname statybin?? medien?? nuosavoje lentpj??v??je.
            </p>
          </div>
        </div>
        </div>
    )
}

export default Home