import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import '../styles/road-safety.css';

function RoadSafety() {
    let navigate = useNavigate();

    useEffect(() => {
        document.title = `Road Safety`;
    }); 

    return (
        <div>
            <Header/>
            <div className='body'>

            </div>
        </div>
    );
}


export default RoadSafety;
