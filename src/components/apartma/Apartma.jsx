import React from 'react'
import image from '../../assets/place_holder.jpg';
import { RiHotelBedFill } from 'react-icons/ri';
import { GiResize } from "react-icons/gi";

import './apartma.css';

const Apartma = ({ title, text, st_postelj, velikost, st }) => {
    return (
        <div className={st % 2 === 0 ? "row" : "reverse"} id={title.toLowerCase()}>

            <img className='slika' src={image} alt={'Slika apartmaja ' + title} />
            <div className='__apartma-text'>
                <h2>{"Apartma " + title}</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non in id voluptatem reprehenderit sed magni consequuntur excepturi deleniti animi, molestias sint obcaecati explicabo dolorem sit praesentium laudantium blanditiis vel harum.
                </p>
                <div className='__apartma-text_icons'>
                    <div><RiHotelBedFill className='react-icons' /> <p>{st_postelj}</p></div>
                    <div><GiResize /> <p>{velikost} m<sup>2</sup></p></div>

                </div>
                <button className='btn'>Preberi več</button>
            </div>

        </div>
    )
}

export default Apartma