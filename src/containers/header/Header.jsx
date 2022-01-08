import React from 'react'
import './header.css';
import headerImage from '../../assets/headerImage.jpg';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

    return (
        <div className='__header' id='home'>
            <img src={headerImage} alt="" sizes="" srcSet="" />
            <div className='center'>
                <p>{t('naslov_m')}</p>
                <h1>Jasna &amp; Nika</h1>
            </div>
        </div>
    )
}

export default Header
