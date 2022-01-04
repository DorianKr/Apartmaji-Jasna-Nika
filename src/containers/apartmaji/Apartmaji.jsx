import React from 'react'
import { Apartma } from '../../components';
import './apartmaji.css';

const apartmaji = [
    {
        title: 'Jasna 1',
        image: '',
        text: '',
        st_postelj: '3',
        velikost: '70'
    },
    {
        title: 'Jasna 2',
        image: '',
        text: '',
        st_postelj: '3',
        velikost: '70'
    },
    {
        title: 'Jasna 3',
        image: '',
        text: '',
        st_postelj: '3',
        velikost: '70'
    },
    {
        title: 'Jasna 4',
        image: '',
        text: '',
        st_postelj: '3',
        velikost: '70'
    },
    {
        title: 'Nika 1',
        image: '',
        text: '',
        st_postelj: '3',
        velikost: '70'
    },
    {
        title: 'Nika 2',
        image: '',
        text: '',
        st_postelj: '3',
        velikost: '70'
    },
]

const Apartmaji = () => {
    return (
        <div className='__apartmaji section__padding' id='apartmaji'>
            <div>
                {apartmaji.map((item, index) => (
                    <Apartma title={item.title} text={item.text} image={item.image} st_postelj={item.st_postelj} velikost={item.velikost} st={index} key={item.title} />
                ))}
            </div>
        </div>
    )
}

export default Apartmaji;