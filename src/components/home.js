import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import '../styles/home.css';

function Homepage() {
    let navigate = useNavigate();

    useEffect(() => {
        document.title = `Home`;
    }); 

    return (
        <div>
            <Header/>
            <div className='body'>

            </div>
        </div>
    );
}


export default Homepage;
