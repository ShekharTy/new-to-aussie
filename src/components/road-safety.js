import React, { useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/road-safety.css';

function RoadSafety() {

    useEffect(() => {
        document.title = `Road Safety`;
    }); 

    return (
        <div>
            <Header/>
            <div className='body'>

            </div>
            <Footer/>
        </div>
    );
}


export default RoadSafety;
