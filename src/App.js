import React, { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react/cjs/react.production.min';

import { Navbar, Copyright } from './components';
import { Footer } from './containers';
import { Apartma, Home, Info } from './Pages';

import './App.css';



const App = () => {
    const [toggleFooterCss, setToggleFooterCss] = useState(false);
    return (
        <Suspense fallback="Loading...">
            <Router>
                <div className='App'>
                    <Navbar />
                    <Routes>
                        <Route path='/Apartmaji-Jasna-Nika' element={<Home />} />
                        <Route path='/Apartmaji-Jasna-Nika/info' element={<Info />} />
                        <Route path='/Apartmaji-Jasna-Nika/Jasna_1' element={<Apartma id={'j1'} />} />
                        <Route path='/Apartmaji-Jasna-Nika/Jasna_2' element={<Apartma id={'j2'} />} />
                        <Route path='/Apartmaji-Jasna-Nika/Jasna_3' element={<Apartma id={'j3'} />} />
                        <Route path='/Apartmaji-Jasna-Nika/Jasna_4' element={<Apartma id={'j4'} />} />
                        <Route path='/Apartmaji-Jasna-Nika/Nika_1' element={<Apartma id={'n1'} />} />
                        <Route path='/Apartmaji-Jasna-Nika/Nika_2' element={<Apartma id={'n2'} />} />
                    </Routes>
                    <div className='fill'></div>
                    <Footer />
                    <Copyright />
                </div>
            </Router>
        </Suspense>
    )
}

export default App;
