import React from 'react'
import { Article } from '../../components';
import { useTranslation } from 'react-i18next';
import './apartmaji.css';



const Apartmaji = () => {
    const { t } = useTranslation();
    const apartmaji = [
        {
            title: 'Jasna 1',
            image: '',
            text: t('apartmaji.j1.opis'),
            st_postelj: '3',
            velikost: '70'
        },
        {
            title: 'Jasna 2',
            image: '',
            text: t('apartmaji.j2.opis'),
            st_postelj: '3',
            velikost: '70'
        },
        {
            title: 'Jasna 3',
            image: '',
            text: t('apartmaji.j3.opis'),
            st_postelj: '3',
            velikost: '70'
        },
        {
            title: 'Jasna 4',
            image: '',
            text: t('apartmaji.j4.opis'),
            st_postelj: '3',
            velikost: '70'
        },
        {
            title: 'Nika 1',
            image: '',
            text: t('apartmaji.n1.opis'),
            st_postelj: '3',
            velikost: '70'
        },
        {
            title: 'Nika 2',
            image: '',
            text: t('apartmaji.n2.opis'),
            st_postelj: '3',
            velikost: '70'
        },
    ]
    return (
        <div className='__apartmaji section__padding' id='apartmaji'>
            <div>
                {apartmaji.map((item, index) => (
                    <Article title={item.title} text={item.text} image={item.image} st_postelj={item.st_postelj} velikost={item.velikost} st={index} key={item.title} />
                ))}
            </div>
        </div>
    )
}

export default Apartmaji;