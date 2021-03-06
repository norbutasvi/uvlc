import React, { useEffect } from 'react'

import supjovimas from './images/supjovimas.jpeg';
import grezimas from './images/grezimas.jpg';
import frezavimas from './images/frezavimas.jpeg';
import obliavimas from './images/obliavimas.jpg';
import fanera2 from './images/fanera2.jpg';
import apie from './images/darbai1.jpg';
import paletes from './images/darbai2.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { SRLWrapper } from "simple-react-lightbox";


function Cutting() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <h1 data-aos={'fade-up'} className="service-title" style={{ backgroundImage: `url(${fanera2})`}}>
                FANEROS, BALDŲ PLOKŠTĖS APDIRBIMAS<br />
                <p>Apdirbame fanerą ir baldines plokštes pagal individualius klientų poreikius</p>
            </h1>
            <div className="wrapper">
                <div className="fanera-content">
                    <p>
                    Kokybiškomis pramoninėmis staklėmis apdirbame fanerą ir baldines plokštes pagal individualius klientų poreikius. Atliekame gamybos ir surinkimo paslaugas galutiniams gaminiams.
                    </p>
                    <div className="fanera-grid">
                        <div className="item">
                            <div className="borders">
                                <img src={supjovimas} alt="" />
                            </div>
                            <h3>SUPJOVIMAS</h3>
                            <p>Pagal jūsų pateiktus matmenis pjauname baldines bei statybines plokštes formatinio pjovimo staklėmis SI 400CLASS, pagamintos italų gamintojo SCM GROUP.</p>
                        </div>
                        <div className="item">
                            <div className="borders">
                                <img src={obliavimas} alt="" />
                            </div>
                            <h3>OBLIAVIMAS</h3>
                            <p>Reismusinėmis obliavimo stakėmis SCM CLASS S520 – kokybiškai ir tiksliai suteikiame medienos obliavomo paslaugą. </p>
                        </div>
                        <div className="item">
                            <div className="borders">
                                <img src={frezavimas} alt="" />
                            </div>
                            <h3>FREZAVIMAS</h3>
                            <p>Profesionaliomis italų gamybos SCP Class TI 120 siūlome frezavimo ir gręžimo paslaugas.</p>
                        </div>
                        <div className="item">
                            <div className="borders">
                                <img src={grezimas} alt="" />
                            </div>
                            <h3>GRĘŽIMAS</h3>
                            <p>Ne tik frezuojame medienos plokštes, taip pat išpjaustome tikslias skyles tolimesniam darbui  pusiau automatinu gręžimo įrenginiu – VITAP.</p>
                        </div>
                    </div>
                    <h2>ATLIKTI DARBAI</h2>
                    <div className="works">
                        <SRLWrapper>
                        <div className="gallery">
                            <a href={apie}><img src={apie} alt="" title=""/></a>
                            <a href={paletes}><img src={paletes} alt="" title=""/></a>
                        </div>
                        </SRLWrapper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cutting
