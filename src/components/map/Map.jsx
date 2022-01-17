import React from 'react'

import { useTranslation } from 'react-i18next';

import './map.css';

const Map = ({ ime }) => {
    const { t } = useTranslation();
    return (
        <div className='google-maps'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4056.393881457728!2d15.328919579834206!3d44.035783156358946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761e40a7b2f446d%3A0x35775f17caf6e47d!2sApartmani%20NIKA!5e0!3m2!1sen!2ssi!4v1641866843067!5m2!1sen!2ssi"
                title={'Map ' + t('naslov_e') + ime} allowFullScreen="" loading="lazy">
            </iframe>
        </div>
    )
}

export default Map