import React from 'react'

import { RiHotelBedFill } from 'react-icons/ri';
import { GiResize } from "react-icons/gi";
import { useTranslation } from 'react-i18next';

import './apartma.css';

const Apartma = ({ id }) => {
    const { t } = useTranslation();
    return (
        <div >
            <h2>{t('apartmaji.' + id + '.ime')}</h2>
            <p>{t('apartmaji.' + id + '.opis')}</p>
        </div>
    )
}

export default Apartma