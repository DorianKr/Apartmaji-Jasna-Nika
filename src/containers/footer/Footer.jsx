import React from 'react'
import { RiPhoneLine, RiMailOpenLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import './footer.css';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className='__footer'>
            <div className='__footer_kontakti-section'>
                <h4>{t('info.kontaktirajte_nas')}</h4>
                <p><RiPhoneLine className='react-icons' /> Tel: <a href="tel:+386000000000">000 000 000</a></p>
                <p><RiMailOpenLine className='react-icons' /> Mail: <a href="mailto:">Apartmaji.Jasna-in-Nika@gmail.com</a></p>
            </div>
            <div className='__footer_input-section'>
                <h4>{t('info.kontaktirajte_nas-vpr')}</h4>
                <label htmlFor="mail">Mail:</label>
                <input id='mail' type="mail" placeholder='primere@mail.com' />
                <label htmlFor="text">{t('info.msg')}</label>
                <textarea id='text' type="text" maxLength={500} />
                <button type="submit">{t('misc.poslji')}</button>
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
                <h4>{t('footer.licenca_ikonice')}</h4>
                <p>{t('footer.ikonice_msg')} <a href="https://www.freepik.com" title="Freepik">Freepik</a> {t('misc.from')} <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                <p></p>
            </div>
        </div>
    )
}

export default Footer
