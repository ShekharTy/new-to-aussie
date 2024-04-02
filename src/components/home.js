import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import '../styles/home.css';

function Homepage() {
    let navigate = useNavigate();

    useEffect(() => {
        document.title = `Home`;
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

export default Homepage;
