import React from 'react'
import { RiPhoneLine, RiMailOpenLine } from 'react-icons/ri';

import './footer.css';

const Footer = () => {
    return (
        <div className='__footer section__padding'>
            <div className='__footer_kontakti-section'>
                <h4>Kontaktirajte nas!</h4>
                <p><RiPhoneLine className='react-icons' /> Tel: <a href="tel:+386000000000">000 000 000</a></p>
                <p><RiMailOpenLine className='react-icons' /> Mail: <a href="mailto:">Apartmaji.Jasna-in-Nika@gmail.com</a></p>
            </div>
            <div className='__footer_input-section'>
                <h4>Če imate kakršna koli vprašanja nam lahko pišete tukaj:</h4>
                <label htmlFor="mail">Mail:</label>
                <input id='mail' type="mail" placeholder='primere@mail.com' />
                <label htmlFor="text">Sporočilo:</label>
                <textarea id='text' type="text" maxLength={500} />
                <button type="submit">Pošlji</button>
            </div>
            {/*
            <div>
                 <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe width="400" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Apartmani%20NIKA,%20Put%20Oljica,%20Suko%C5%A1an,%20Croatia&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        <a href="https://fmovies-online.net">fmovies</a>
                    </div>
                </div> 
            </div>*/}
            <div className='__footer_license-section'>
                <h4>Licenca za ikonice</h4>
                <p>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
            </div>
        </div>
    )
}

export default Footer
