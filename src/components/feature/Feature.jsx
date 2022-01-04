import React from 'react'
import { air_conditioner, area, wifi, pool } from './import.js'

import './feature.css';

const Feature = () => {
    return (
        <div className='__feature'>
            <div>
                <img src={air_conditioner} alt="Klima" />
            </div>
            <div>
                <img src={area} alt="Veliki apartmaji" />
            </div>
            <div>
                <img src={wifi} alt="Wifi" />
            </div>
            <div>
                <img src={pool} alt="Bazen" />
            </div>
        </div>
    )
}

export default Feature
