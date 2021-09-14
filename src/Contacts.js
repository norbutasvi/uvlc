import React, { useEffect, useState } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

import contact_us from './images/contact_us.jpg';
import phone from './images/phone.svg';
import email from './images/email.svg';
import location from './images/location.svg';
import loader from './images/Loader.gif';
import axios from 'axios';

function Contacts() {

    useEffect(() => {
        AOS.init();
    }, []);

    const [fields, setFields] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })

    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (fields.name.length < 1 || fields.phone.length < 1 || fields.email.length < 1 || fields.message.length < 1) {
            setShowError(true);
            setIsLoading(false);
        } else {
            setShowError(false);

            axios.post(`https://uvlc-emailer.herokuapp.com/api/forma`, fields)
            .then(res => {
                setShowSuccess(true);
                setIsLoading(false);
            })
        }

    }

    return (
        <div>
            <h1 data-aos={'fade-up'} className="service-title" style={{ backgroundImage: `url(${contact_us})`}}>
                KONTAKTAI<br />
                <p>Susisiekite ir kartu rasime geriausią sprendimą</p>
            </h1>
            <div className="wrapper">
                <div className="boxes-row">
                    <div className="item">
                        <p><strong>TELEFONAS</strong><br/>8 617 26444</p>
                        <img src={phone} alt="" />
                    </div>
                    <div className="item">
                        <p><strong>EL. PAŠTAS</strong><br/>info@uvlc.lt</p>
                        <img src={email} alt="" />
                    </div>
                    <div className="item">
                        <p><strong>ADRESAS</strong><br/>Deltuvos g. 39B, Ukmergė</p>
                        <img src={location} alt="" />
                    </div>
                </div>
                <div className="form">
                    <form>
                        <h3>Užklausos forma</h3>
                        <label>Vardas</label>
                        <input type="text" onChange={(e) => setFields({...fields, name: e.target.value})}></input>
                        <label>Telefonas</label>
                        <input type="text" onChange={(e) => setFields({...fields, phone: e.target.value})}></input>
                        <label>El. paštas</label>
                        <input type="text" onChange={(e) => setFields({...fields, email: e.target.value})}></input>
                        <label>Žinutė</label>
                        <input type="text" onChange={(e) => setFields({...fields, message: e.target.value})}></input>
                        <input type="submit" value="Siųsti" onClick={(e) => handleSubmit(e)}></input>
                        {
                            showError && <div style={{ color: 'red'}}>Užpildykite visus laukelius</div>
                        }
                        {
                            showSuccess && <div style={{ color: 'green'}}>Laiškas išsiųstas. Netrukus atsakysime.</div>
                        }
                        {
                            isLoading && <img className="loader" src={loader} alt=""/>
                        }
                    </form>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2274.3823019021115!2d24.732220915742673!3d55.246525780420995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e79858d127fe37%3A0x188b015acece07f3!2sDeltuvos%20g.%2039B%2C%20Ukmerg%C4%97%2020126!5e0!3m2!1slt!2slt!4v1631091806821!5m2!1slt!2slt" allowfullscreen="" title="langu centras" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
