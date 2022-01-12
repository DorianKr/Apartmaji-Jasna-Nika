import React from 'react'
import image from '../../assets/place_holder.jpg';
import { RiHotelBedFill } from 'react-icons/ri';
import { GiResize } from "react-icons/gi";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import './article.css';

const Article = ({ title, text, st_postelj, velikost, st }) => {
    const { t } = useTranslation();
    return (
        <div className={st % 2 === 0 ? "row" : "reverse"} id={title.toLowerCase()}>

            <img className='slika' src={image} alt={t('alt.slika_apartmaja') + title} />
            <div className='__apartma-text'>
                <h2>{t('naslov_e')} {title}</h2>

                <p>
                    {text}
                </p>
                <div className='__apartma-text_icons'>
                    <div><RiHotelBedFill className='react-icons' /> <p>{st_postelj}</p></div>
                    <div><GiResize /> <p>{velikost} m<sup>2</sup></p></div>

                </div>
                <Link to="" className='btn'>{t('misc.preberi_vec')}</Link>
            </div>

        </div>
    )
}

export default Article
