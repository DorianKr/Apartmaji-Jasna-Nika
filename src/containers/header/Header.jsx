import React from 'react'
import './header.css';

import headerImage from '../../assets/headerImage.jpg';

const Header = () => {
    return (
        <div className='__header' id='home'>
            <img src={headerImage} alt="" sizes="" srcSet="" />
            <div className='center'>
                <p>Apartmaji</p>
                <h1>Jasna &amp; Nika</h1>
            </div>
        </div>
    )
}

export default Header
