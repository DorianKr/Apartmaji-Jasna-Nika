import React from 'react'

import { Article, Feature, Navbar } from './components';
import { Header, Footer, Features, Apartmaji } from './containers';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Copyright from './components/copyright/Copyright';
import { Suspense } from 'react/cjs/react.production.min';

const App = () => {
    return (
        <Suspense fallback="Loading...">
            <div className='App'>
                <div className='nav__color'>
                    <Router>
                        <Navbar />
                    </Router>
                    <Header />
                </div>
                <Feature />
                <Apartmaji />
                <Footer />
                <Copyright />
            </div>
        </Suspense>
    )
}

export default App;
