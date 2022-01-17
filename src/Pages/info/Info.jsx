import React from 'react'
import { RiPhoneFill, RiMailOpenFill, RiMapPin2Fill } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

import { Map } from '../../components';

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
                    <Map ime="Nika" />
                </div>
                <div>
                    <h3>{t('naslov_e')} Jasna</h3>
                    <p><RiMapPin2Fill className='react-icons' /> {t('info.naslov')}: Sveti Petar 39, 23207, Sveti Petar na Moru, {t('info.hr')}</p>
                    <Map ime="Jasna" />
                </div>
            </div>
            <div className='_vprasanja'>
                <h2>{t('info.vprasanja')}</h2>
                <center>
                    <details>
                        <summary>Ali je plaža blizu?</summary>
                        <p>JA! Plaža je blizu, samo kakšnih 60m (2 min peš).</p>
                    </details>
                    <details>
                        <summary>Ali je kakšen prostor za druženje zunaj?</summary>
                        <p>Ja. Vsaka hiša ima zunaj urejen kotiček z žarom in mizo.</p>
                    </details>
                    <details>
                        <summary>Ali imajo vsi apartmaji klimo?</summary>
                        <p>Ja. Vsak amaprtma ima svojo klimatsko napravo in daljinec za vpravljanje.</p>
                    </details>
                    <details>
                        <summary>Ali je za klimo potrebno doplačilo?</summary>
                        <p>Ne! Klima ni posebno zaračunana.</p>
                    </details>
                </center>
            </div>
        </div>
    )
}

export default Info
