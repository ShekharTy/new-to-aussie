import React, { useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/attribution.css';

function Attributions() {

    useEffect(() => {
        document.title = `Attributions`;
    });

    return (
        <div className="page-container">
            <Header/>
            <main className="content-wrap">
            </main>
            <Footer/>
        </div>
    );
}

export default Attributions;