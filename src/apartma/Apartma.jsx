import React from 'react'

import { RiHotelBedFill } from 'react-icons/ri';
import { GiResize } from "react-icons/gi";
import { useTranslation } from 'react-i18next';

import './apartma.css';

const Apartma = ({ title, text, st_postelj, velikost, st }) => {
    const { t } = useTranslation();
    return (
        <div id={title.toLowerCase()}>
            Apartma

        </div>
    )
}

export default Apartma