import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css';

import langai from './images/langai.jpeg';
import mediena from './images/mediena.jpeg';
import apie from './images/apie.jpeg';
import fanera from './images/fanera.jpeg';
import arrow from './images/arrow2.svg';
import home from './images/home.jpeg';

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
              <img src={home} />
            </div>
            <p data-aos={'fade-up'} className="text">
              <h3>APIE MUS</h3>
              Esame medienos apdirbimo įmonė, įsikūrusi strategiškai patogioje vietoje, Ukmergės mieste (pravažiavus Regitrą). Įmonė UVLC Mediena  įkurta 2012 metais. Pagrindinė veiklos sritis – didmeninė ir mažmeninė prekyba statybine mediena ir jos gaminiais. Nuosavoje lentpjūvėje pjauname įvairaus storio ir dydžio lentas, lauko ir vidaus apdailos dailylentes, gegnes, bruselius (tašus), bei kitus medienos ruošinius.
            </p>
          </div>
        </div>
        </div>
    )
}

export default Home
