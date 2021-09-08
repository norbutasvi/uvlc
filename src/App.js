import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import React, { useState } from 'react';

import './style.css';

// Import Swiper React components

import 'swiper/swiper-bundle.css';

import SimpleReactLightbox from 'simple-react-lightbox';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './Navbar';
import Home from './Home';
import Windows from './Windows';
import Footer from './Footer';
import Cutting from './Cutting';
import Wood from './Wood';

import logo from './images/uvlc_logo3.PNG';
import hamburger from './images/hamburger.svg';
import close from './images/close_button.svg';
import clock from './images/clock.svg';
import phone from './images/phone.svg';
import Contacts from './Contacts';

function App() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <Router>
      <AnimatePresence>
        {
          showMenu &&

          <motion.div className="mobile-menu"
            initial={{ x: '100%'}}
            animate={{ x: 0}}
            exit={{ x: '100%'}}
            transition={{type: 'tween'}}
          >
          <div className="close-btn" onClick={() => setShowMenu(false)}>
            <img src={close} />
          </div>
          <div className="wrapper">
            <ul>
              <Link to="/" onClick={() => setShowMenu(false)}>
                <li>Pagrindinis</li>
              </Link>
              <Link to="/plastikiniai-langai" onClick={() => setShowMenu(false)}>
                <li>Plastikiniai langai</li>
              </Link>
              <Link to="/faneros-pjaustymas" onClick={() => setShowMenu(false)}>
                <li>Fanera ir apdirbimas</li>
              </Link>
              <Link to="/statybine-mediena" onClick={() => setShowMenu(false)}>
                <li>Statybinė mediena</li>
              </Link>
              <Link to="/kontaktai" onClick={() => setShowMenu(false)}>
                <li>Kontaktai</li>
              </Link>
            </ul>
            <div className="mobile-contacts">
            <div className="item">
                <img src={clock} />
                <p>I-V: 08:00 - 17:00</p>
              </div>
              <div className="item">
                <img src={phone} />
                <p>8 617 26444</p>
              </div>
          </div>
          </div>
      </motion.div>
        }
      </AnimatePresence>
      <div className="mobile-nav">
        <Link to="/"><img src={logo} className="logo"/></Link>
        <div className="mobile-button" onClick={() => setShowMenu(true)}>
          <img src={hamburger} />
        </div>
      </div>
      <SimpleReactLightbox>
      <Navbar />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/plastikiniai-langai" component={Windows} />
        <Route path="/faneros-pjaustymas" component={Cutting} />
        <Route path="/statybine-mediena" component={Wood} />
        <Route path="/kontaktai" component={Contacts} />
        </Switch>
      <Footer />
      </SimpleReactLightbox>
    </Router>
  );
}

export default App;
