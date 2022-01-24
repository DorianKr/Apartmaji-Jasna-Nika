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
                    <p><RiMapPin2Fill className='react-icons' /> {t('info.naslov')}: Put Oljica 5, 23206, Sukošan, {t('misc.hr')}</p>
                    <Map ime="Nika" />
                </div>
                <div>
                    <h3>{t('naslov_e')} Jasna</h3>
                    <p><RiMapPin2Fill className='react-icons' /> {t('info.naslov')}: Sveti Petar 39, 23207, Sveti Petar na Moru, {t('misc.hr')}</p>
                    <Map ime="Jasna" />
                </div>
            </div>
            <div className='_vprasanja'>
                <h2>{t('info.vprasanja.naslov')}</h2>
                <center>
                    <details>
                        <summary>{t('info.vprasanja.v1')}</summary>
                        <p>{t('info.vprasanja.o1')}</p>
                    </details>
                    <details>
                        <summary>{t('info.vprasanja.v2')}</summary>
                        <p>{t('info.vprasanja.o2')}</p>
                    </details>
                    <details>
                        <summary>{t('info.vprasanja.v3')}</summary>
                        <p>{t('info.vprasanja.o3')}</p>
                    </details>
                    <details>
                        <summary>{t('info.vprasanja.v4')}</summary>
                        <p>{t('info.vprasanja.o4')}</p>
                    </details>
                </center>
            </div>
        </div>
    )
}

export default Info
