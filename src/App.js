import React, { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react/cjs/react.production.min';

import { Navbar, Copyright } from './components';
import { Footer } from './containers';
import { Home, Info } from './Pages';

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
