import React, { useEffect } from 'react'
import mediena from './images/mediena.jpg';
import info from './images/info2.svg';

import { SRLWrapper } from "simple-react-lightbox";

import apie from './images/apie.jpg';
import paletes from './images/paletes.jpg';
import home from './images/home.jpg';


import AOS from 'aos';
import 'aos/dist/aos.css';

function Wood() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <h1 data-aos={'fade-up'} className="service-title" style={{ backgroundImage: `url(${mediena})`}}>
                STATYBINĖ MEDIENA<br />
                <p>UV Mediena tiekia eglines arba pušines dvigubo pjovimo lentas.</p>
            </h1>
            <div className="wood-content">
                <div className="wrapper">
                    <div className="flex-center">
                        <div className="about-image">
                            <img src={home} alt=""/>
                        </div>
                        <p data-aos={'fade-up'} className="text">
                            <h3>APIE MUS</h3>
                            Esame medienos apdirbimo įmonė, įsikūrusi strategiškai
                            patogioje vietoje, Ukmergės mieste (pravažiavus Regitrą).
                            Įmonė UVLC Mediena  įkurta 2012 metais. Pagrindinė
                            veiklos sritis – didmeninė ir mažmeninė prekyba statybine
                            mediena ir jos gaminiais. Nuosavoje lentpjūvėje pjauname
                            įvairaus storio ir dydžio lentas, lauko ir vidaus apdailos
                            dailylentes, gegnes, bruselius (tašus), bei kitus medienos
                            ruošinius.
                        </p>
                    </div>
                <p className="sizes-text">Pagrindiniai matmenys (galimi ir kiti matmenys)</p>
                    <table>
                        <thead>
                            <tr>
                                <td></td>
                                <td>Storis, mm</td>
                                <td>Plotis, mm</td>
                                <td>Ilgis, mm</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="bold">Dvigubo pjovimo</td>
                                <td>25/30/40/50</td>
                                <td>75/100/125/150</td>
                                <td>3000-6000</td>
                            </tr>
                            <tr>
                                <td className="bold">Viengubo pjovimo</td>
                                <td>25</td>
                                <td>-</td>
                                <td>3000-6000</td>
                            </tr>
                            <tr>
                                <td className="bold">Tašai ir tašeliai</td>
                                <td>25/50/100/120/150</td>
                                <td>50/75/100/120/150/200</td>
                                <td>3000-6000</td>
                            </tr>
                            <tr>
                                <td className="bold">Nestandartinės paletės</td>
                                <td>150</td>
                                <td>600/800/900</td>
                                <td>1200/1400/1800</td>
                            </tr>
                            <tr>
                                <td className="bold">Obliuotos lentos</td>
                                <td>Pagal individualų užsakymą, per 1-2 d.d.</td>
                            </tr>
                            <tr>
                                <td className="bold">Lauko ir vidaus dailylentės</td>
                                <td>Pagal individualų užsakymą, per 1-2 d.d.</td>
                            </tr>
                            <tr>
                                <td className="bold">Grindinės lentos</td>
                                <td>Pagal individualų užsakymą, per 1-2 d.d.</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="information">
                        <img src={info} alt=""/>
                        <p>
                        Pjautinė mediena ir jos gaminiai tiekiami pagal išankstinius užsakymus.<br/>
                        Išankstiniai užsakymai priimame el.paštu info@uvlc.lt. Dėl kainų teirautis tel.: 8 617 26444
                        </p>
                    </div>
                    <p style={{textAlign:'center', marginBottom: '10px'}}>Taip pat nuolat turime ir prekiaujame medienos atraižomis, pjuvenomis.</p>
                    <SRLWrapper>
                    <div className="gallery">
                        <a href={apie}><img src={apie} alt="" title=""/></a>
                        <a href={paletes}><img src={paletes} alt="" title=""/></a>
                    </div>
                    </SRLWrapper>
                </div>
            </div>
        </div>
    )
}

export default Wood
