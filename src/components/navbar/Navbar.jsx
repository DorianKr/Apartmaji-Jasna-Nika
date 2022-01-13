import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine, RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { Link as Link2 } from "react-scroll";
import { Link } from 'react-router-dom';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo-full.svg';
import './navbar.css';


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleSubMenu, setToggleSubMenu] = useState(true);

    const { t } = useTranslation();

    const onChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div className='__navbar'>
            <div className='__navbar_logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='__navbar-links'>
                <div className='__navbar-links_container'>
                    <ul>
                        <li ><Link to="/Apartmaji-Jasna-Nika" >{t('nav.domov')}</Link></li>
                        <li className='dropdown'>
                            {toggleSubMenu
                                ? <Link to="#" onClick={() => setToggleSubMenu(false)}>{t('naslov_m')}<RiArrowDropDownLine color='#000' className='react-icons' size={21} /></Link>
                                : <Link to="#" onClick={() => setToggleSubMenu(true)}>{t('naslov_m')}<RiArrowDropUpLine color='#000' className='react-icons' size={21} /></Link>
                            }

                            {!toggleSubMenu && (
                                <ul className='submenu'>
                                    <li><Link2 to='jasna 1' smooth={true} duration={1000} delay={100} onClick={() => setToggleSubMenu(true)}>Jasna 1</Link2></li>
                                    <li><Link2 to='jasna 2' smooth={true} duration={1000} delay={100} onClick={() => setToggleSubMenu(true)}>Jasna 2</Link2></li>
                                    <li><Link2 to='jasna 3' smooth={true} duration={1000} delay={100} onClick={() => setToggleSubMenu(true)}>Jasna 3</Link2></li>
                                    <li><Link2 to='jasna 4' smooth={true} duration={1000} delay={100} onClick={() => setToggleSubMenu(true)}>Jasna 4</Link2></li>
                                    <li><Link2 to='nika 1' smooth={true} duration={1000} delay={100} onClick={() => setToggleSubMenu(true)}>Nika 1</Link2></li>
                                    <li><Link2 to='nika 2' smooth={true} duration={1000} delay={100} onClick={() => setToggleSubMenu(true)}>Nika 2</Link2></li>
                                </ul>
                            )}
                        </li>
                        <li><Link to="zasedenost">{t('nav.zasedenost')}</Link></li>
                        <li><Link to="/Apartmaji-Jasna-Nika/info">{t('nav.info')}</Link></li>
                        <li>
                            <select name="language" onChange={onChange}>
                                <option value="sl">SLO</option>
                                <option value="en">ENG</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='__navbar-menu'>
                <select name="language" onChange={onChange}>
                    <option value="sl">SLO</option>
                    <option value="en">ENG</option>
                </select>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => { setToggleMenu(false); setToggleSubMenu(true) }} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='__navbar-menu_container scale-up-center'>

                        <ul>
                            <li className={toggleSubMenu ? '' : 'hide'}><Link to="/Apartmaji-Jasna-Nika" onClick={() => setToggleMenu(false)}>{t('nav.domov')}</Link></li>
                            <li className='dropdown'>
                                {toggleSubMenu
                                    ? <Link to="#" onClick={() => { setToggleSubMenu(false); }}>{t('naslov_m')}<RiArrowDropDownLine color='#000' className='react-icons' size={21} /></Link>
                                    : <Link to="#" onClick={() => { setToggleSubMenu(true); }}>{t('naslov_m')}<RiArrowDropUpLine color='#000' className='react-icons' size={21} /></Link>
                                }

                                {!toggleSubMenu && (
                                    <ul className='submenu'>
                                        <li><Link2 to='jasna 1' smooth={true} duration={1000} delay={100} onClick={() => { setToggleSubMenu(true); setToggleMenu(false); }}>Jasna 1</Link2></li>
                                        <li><Link2 to='jasna 2' smooth={true} duration={1000} delay={100} onClick={() => { setToggleSubMenu(true); setToggleMenu(false); }}>Jasna 2</Link2></li>
                                        <li><Link2 to='jasna 3' smooth={true} duration={1000} delay={100} onClick={() => { setToggleSubMenu(true); setToggleMenu(false); }}>Jasna 3</Link2></li>
                                        <li><Link2 to='jasna 4' smooth={true} duration={1000} delay={100} onClick={() => { setToggleSubMenu(true); setToggleMenu(false); }}>Jasna 4</Link2></li>
                                        <li><Link2 to='nika 1' smooth={true} duration={1000} delay={100} onClick={() => { setToggleSubMenu(true); setToggleMenu(false); }}>Nika 2</Link2></li>
                                        <li><Link2 to='nika 2' smooth={true} duration={1000} delay={100} onClick={() => { setToggleSubMenu(true); setToggleMenu(false); }}>Nika 3</Link2></li>
                                    </ul>
                                )}
                            </li>
                            <li className={toggleSubMenu ? '' : 'hide'}><Link to="zasedenost" onClick={() => setToggleMenu(false)}>{t('nav.zasedenost')}</Link></li>
                            <li className={toggleSubMenu ? '' : 'hide'}><Link to="/Apartmaji-Jasna-Nika/info" onClick={() => setToggleMenu(false)}>{t('nav.info')}</Link></li>

                        </ul>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Navbar
