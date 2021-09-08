import React from 'react'
import pointer from './images/pointer.svg';
import logo from './images/uvlc_logo3.PNG';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <div className="footer">
          <div className="wrapper">
            <div className="col">
              <div className="logo">
                <img src={logo} />
              </div>
              <strong>UAB "UKMERGĖS VERSMĖS" LANGŲ CENTRAS</strong><br />
              Įmonės kodas: 183219083<br />
              Adresas: Deltuvos g. 39B, LT-20126 Ukmergė
            </div>
            <div className="col links">
              <Link to="/plastikiniai-langai"><p><img src={pointer} />Plastikiniai langai</p></Link>
              <Link to="/faneros-pjaustymas"><p><img src={pointer} />Faneros pjaustymas</p></Link>
              <Link to="/statybine-mediena"><p><img src={pointer} />Statybinė mediena</p></Link>
            </div>
            <div className="col">
              <h4>KONTAKTAI</h4>
              <p>Telefonas: 8 617 26444</p>
              <p>El. paštas: info@uvlc.lt</p>
            </div>
          </div>
        </div>
        <p className="copyright">Copyright © 2021. Visos teisės saugomos.<br />Sprendimas <a href="https://northweb.lt">northweb.lt</a></p>
        </div>
    )
}

export default Footer
