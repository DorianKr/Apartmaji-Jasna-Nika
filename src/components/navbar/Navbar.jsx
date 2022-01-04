import React from 'react'
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine, RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import logo from '../../assets/logo-full.svg';
import './navbar.css';
import { Link, animateScroll as scroll } from "react-scroll";

const Menu = () => (
    <>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleSubMenu, setToggleSubMenu] = useState(true);
    const test = '';
    return (
        <div className='__navbar'>
            <div className='__navbar_logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='__navbar-links'>
                <div className='__navbar-links_container'>
                    <ul>
                        <li ><Link to="home" >Domov</Link></li>
                        <li className='dropdown'>
                            {toggleSubMenu
                                ? <Link to="" onClick={() => setToggleSubMenu(false)}>Apartmaji<RiArrowDropDownLine color='#000' className='react-icons' size={21} /></Link>
                                : <Link to="" onClick={() => setToggleSubMenu(true)}>Apartmaji<RiArrowDropUpLine color='#000' className='react-icons' size={21} /></Link>
                            }

                            {!toggleSubMenu && (
                                <ul className='submenu'>
                                    <li><Link to='jasna 1' onClick={() => setToggleSubMenu(true)}>Jasna 1</Link></li>
                                    <li><Link to='jasna 2' onClick={() => setToggleSubMenu(true)}>Jasna 2</Link></li>
                                    <li><Link to='jasna 3' onClick={() => setToggleSubMenu(true)}>Jasna 3</Link></li>
                                    <li><Link to='jasna 4' onClick={() => setToggleSubMenu(true)}>Jasna 4</Link></li>
                                    <li><Link to='nika 1' onClick={() => setToggleSubMenu(true)}>Nika 2</Link></li>
                                    <li><Link to='nika 2' onClick={() => setToggleSubMenu(true)}>Nika 3</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link to="zasedenost">Zasedenost / Cene</Link></li>
                        <li><Link to="info">Info</Link></li>
                    </ul>
                </div>
            </div>
            <div className='__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => { setToggleMenu(false); setToggleSubMenu(true) }} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='__navbar-menu_container scale-up-center'>

                        <ul>
                            <li className={toggleSubMenu ? '' : 'hide'}><Link to="home" onClick={() => setToggleMenu(false)}>Domov</Link></li>
                            <li className='dropdown'>
                                {toggleSubMenu
                                    ? <Link to="" onClick={() => { setToggleSubMenu(false); }}>Apartmaji<RiArrowDropDownLine color='#000' className='react-icons' size={21} /></Link>
                                    : <Link to="" onClick={() => { setToggleSubMenu(true); }}>Apartmaji<RiArrowDropUpLine color='#000' className='react-icons' size={21} /></Link>
                                }

                                {!toggleSubMenu && (
                                    <ul className='submenu'>
                                        <li><Link to='jasna 1' onClick={() => { setToggleSubMenu(true); setToggleMenu(false); }}>Jasna 1</Link></li>
                                        <li><Link to='jasna 2' onClick={() => { setToggleSubMenu(true); setToggleMenu(false); }}>Jasna 2</Link></li>
                                        <li><Link to='jasna 3' onClick={() => { setToggleSubMenu(true); setToggleMenu(false); }}>Jasna 3</Link></li>
                                        <li><Link to='jasna 4' onClick={() => { setToggleSubMenu(true); setToggleMenu(false); }}>Jasna 4</Link></li>
                                        <li><Link to='nika 1' onClick={() => { setToggleSubMenu(true); setToggleMenu(false); }}>Nika 2</Link></li>
                                        <li><Link to='nika 2' onClick={() => { setToggleSubMenu(true); setToggleMenu(false); }}>Nika 3</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li className={toggleSubMenu ? '' : 'hide'}><Link to="zasedenost" onClick={() => setToggleMenu(false)}>Zasedenost / Cene</Link></li>
                            <li className={toggleSubMenu ? '' : 'hide'}><Link to="info" onClick={() => setToggleMenu(false)}>Info</Link></li>
                        </ul>

                    </div>
                )

                }
            </div>
        </div>
    )
}

export default Navbar
