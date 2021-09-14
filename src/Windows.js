import React, {useEffect} from 'react'
import langai from './images/langai.jpg';
import { SRLWrapper } from "simple-react-lightbox";
import plastic from './images/plastic.jpg';
import fanera from './images/fanera.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom';

function Windows() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <h1 data-aos={'fade-up'} className="service-title" style={{ backgroundImage: `url(${langai})`}}>
                PLASTIKINIAI LANGAI<br />
                <p>Plastikiniai langai, durys, pertvaros – iš kokybiško vokiško REHAU profilio. </p>
            </h1>
            <div className="wrapper">
                <div className="windows-content">
                    <p>
                    <SRLWrapper>
                    <a href={plastic} className="paragraph-image"><img src={plastic} alt="" title=""/></a>
                    </SRLWrapper>
                    Plastikinius langus ir duris gaminame nuosavose patalpose Ukmergės mieste nuo 2002 metų.
                    </p>
                    <p>
                    Rehau langai pasižymi išskirtinėmis techninėmis savybėmis. Naujoji langų sistema užtikrina šiuolaikiškiausią kamerų konstrukciją, kuri padeda pasiekti geriausią šilumos izoliaciją.
                    </p>
                    <p>
                    Šis profilis pasižymi ilgaamžiškumu, Rehau yra atsparus drėgmei bei saulės spinduliams. Taip pat pasižymi lengva priežiūra, paviršiai yra ypač lengvai valomi. REHAU profiliai turi aukštos kokybės užbaigimo (HDF) būdu apdorotą paviršių, todėl yra lengvai prižiūrimi. Valant juos tam skirtomis priemonėmis šis profilio paviršius atrodo spindintis ir lygus ir tokios išvaizdos nepraranda ilgą laikotarpį.
                    </p>
                    <p>
                    Rehau profilio priešįsilaužiminė sistema instaliuojama į kievieną langą, todėl pasirinkdami šį profilį užtikrinsite jūsų namams dar didesnį saugumą. 
                    </p>
                    <p>
                    REHAU profiliai, lyginant juos su kitokiais pastaruoju metu naudojamais langų profiliais, turi nemažai privalumų, dėl to yra teigiamai vertinami klientų. Pagal aukščiausios klasės kokybės lygį gaminami šie langai pasižymi optimaliu energijos taupymu, puikia apsauga nuo iš gatvės sklindančio triukšmo ir dulkių, bei apsauga nuo įsilaužimo. Daugiau nei 60 metų rinkoje dalyvaujantys šie Vokietijos gamintojai klientams siūlo tik aukščiausio lygio gaminius.
                    </p>
                    <div className="flex-paragraph">
                    <SRLWrapper>
                        <a href={fanera} className="paragraph-image-left"><img src={fanera} alt="" title=""/></a>
                    </SRLWrapper>
                    <div className="link">
                    <p>
                    Dirbame su idividualiais užsakymais, statybų įmonėmis, gaminame ir tiekiame montuotojų komandoms.
                    </p>
                    <p>Džiaugiamės sulaukę jūsų dėmesio!
                    Atsakysime į visus rūpimus klausimus.
                    </p>
                    <Link to="/kontaktai">SUSISIEKTI</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Windows
