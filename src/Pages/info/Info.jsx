import React from 'react'
import { RiPhoneFill, RiMailOpenFill, RiMapPin2Fill } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

import './info.css';

function Info() {
    const { t } = useTranslation();
    return (
        <div className='__info '>
            <div>
                <h2>{t('info.kontakti')}</h2>
                <p><RiPhoneFill className='react-icons' /> Tel: <a href="tel:+386000000000">000 000 000</a></p>
                <p><RiMailOpenFill className='react-icons' /> Mail: <a href="mailto:">Apartmaji.Jasna-in-Nika@gmail.com</a></p>
            </div>
            <div className='flex_row __info_section'>

                <div>
                    <h3>{t('naslov_e')} Nika</h3>
                    <p><RiMapPin2Fill className='react-icons' /> {t('info.naslov')}: Put Oljica 5, 23206, Sukošan, {t('info.hr')}</p>
                    <div className='google-maps'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4056.393881457728!2d15.328919579834206!3d44.035783156358946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761e40a7b2f446d%3A0x35775f17caf6e47d!2sApartmani%20NIKA!5e0!3m2!1sen!2ssi!4v1641866843067!5m2!1sen!2ssi"
                            title={'Map ' + t('naslov_e') + ' Nika'} allowFullScreen="" loading="lazy">
                        </iframe>
                    </div>
                </div>
                <div>
                    <h3>{t('naslov_e')} Jasna</h3>
                    <p><RiMapPin2Fill className='react-icons' /> {t('info.naslov')}: Sveti Petar 39, 23207, Sveti Petar na Moru, {t('info.hr')}</p>
                    <div className='google-maps'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1434.8612528950036!2d15.367918157089706!3d44.00646209264764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761e1117ab15159%3A0xac2d7f3935460130!2sJasna!5e0!3m2!1sen!2ssi!4v1641867149113!5m2!1sen!2ssi"
                            title={'Map ' + t('naslov_e') + ' Jasna'} allowFullScreen="" loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
