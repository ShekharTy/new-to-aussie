import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import '../styles/beach-safety.css';

function BeachSafety() {
    let navigate = useNavigate();

    useEffect(() => {
        document.title = `Beach Safety`;
    }); 

    return (
        <div>
            <Header/>
            <div className='body'>

            </div>
        </div>
    );
}


export default BeachSafety;