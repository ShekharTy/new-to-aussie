import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import '../styles/beach-safety.css';

function BeachSafety() {

    let navigate = useNavigate();

    useEffect(() => {
        document.title = `Beach Safety`;
    }); 
    // Sub-module components
    function SwimmingSafety() {
        return (
            <div>
                <h2>Swimming Safety</h2>
                {/* Add swimming safety content */}
            </div>
        );
    }
    return (
        <div>
            <Header/>
            <div className='body'>
                Getting started
                {/*Render sub modules */}
                <SwimmingSafety />
            </div>
        </div>
    );
}


export default BeachSafety;