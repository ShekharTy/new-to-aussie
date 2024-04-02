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
                <h2> Swimming Safety </h2>
                <p>
                    Swimming at the beach can be both fun and refreshing, 
                    but it's important to be aware of potential hazards and practice safety measures to prevent accidents.
                    </p>       
                    <h3> Swim safety Tips for you!</h3>
                    <ul>
                    <li>Always swim in designated areas with lifeguards present, if possible.</li>
                    <li>Check beach conditions, such as water temperature, currents, and weather forecasts, before entering the water.</li>
                    <li>Never swim alone; always swim with a buddy or in groups.</li>
                    <li>Learn to recognize and understand beach warning flags and signs.</li>
                    <li>If caught in a rip current, remain calm, and swim parallel to the shore until you're out of the current.</li>
                    <li>Avoid diving into unfamiliar or shallow water to prevent head and spinal injuries.</li>
                </ul>
            </div>
        );
    }
    return (
        <div>
            <Header/>
            <div className='body'>
                
                {/*Render sub modules */}
                <SwimmingSafety />

            </div>
        </div>
    );
}


export default BeachSafety;