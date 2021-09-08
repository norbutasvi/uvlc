import React from 'react'

import logo from './images/uvlc_logo3.PNG';
import clock from './images/clock.svg';
import phone from './images/phone.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
          <div className="navbar">
          <div className="header-contacts">
          <div className="wrapper">
            <div className="item">
              <img src={clock} alt="" />
              <p>I-V: 08:00 - 17:00</p>
            </div>
            <div className="item">
              <img src={phone} alt="" />
              <p>8 617 26444</p>
            </div>
          </div>
          </div>
          <div className="flex-center">
            <div className="wrapper">
            <div className="logo">
              <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="menu">
              <ul>
                <Link to="/"><li>PAGRINDINIS</li></Link>
                <Link to="/plastikiniai-langai"><li>PLASTIKINIAI LANGAI</li></Link>
                <Link to="/faneros-pjaustymas"><li>FANERA IR APDIRBIMAS</li></Link>
                <Link to="/statybine-mediena"><li>STATYBINĖ MEDIENA</li></Link>
                <Link to="/kontaktai"><li>KONTAKTAI</li></Link>
              </ul>
            </div>
            </div>
          </div>
        </div>
    )
}

export default Navbar
