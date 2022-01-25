import React from 'react'

import { RiHotelBedFill } from 'react-icons/ri';
import { GiResize } from "react-icons/gi";
import { useTranslation } from 'react-i18next';

import { CarouselContainer } from '../../components';

import './apartma.css';

const Apartma = ({ id }) => {
    const { t } = useTranslation();
    return (
        <div className='__apartma'>
            <h2>{t('naslov_e')} {t('apartmaji.' + id + '.ime')}</h2>
            <CarouselContainer />
            <p>{t('apartmaji.' + id + '.opis')}</p>

        </div>
    )
}

export default Apartma