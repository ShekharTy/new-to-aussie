import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import '../styles/beach-safety.css';
import signImage1 from '../data/sign1.png'; 
import signImage2 from '../data/sign2.png';

function BeachSafety() {

    let navigate = useNavigate();

    useEffect(() => {
        document.title = `Beach Safety`;
    }); 
    function GalleryItem({ imageSrc, altText, title, facts, onMouseEnter, onMouseLeave }) {
        return (
            <li className="gallery-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <img className="gallery-item__image" src={imageSrc} alt={altText} />
                <div className="gallery-item__text">
                    <div className="gallery-item__title">{title}</div>
                    <div className="gallery-item__facts">{facts}</div>
                </div>
            </li>
        );
    }
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
    function SignGallery(){
        // State to track which item is currently hovered
        const [hoveredItem, setHoveredItem] = useState(null);
        return (
            <ul className="gallery">
                <GalleryItem
                    imageSrc={signImage1} 
                    altText="Dangerous Currents"
                    title="Dangerous Current"
                    facts="This symbol means, it is a  dangerous current and you should not swim in that area"
                    onMouseEnter={() => setHoveredItem('Sign1')}
                    onMouseLeave={() => setHoveredItem(null)}
                />
                <GalleryItem
                imageSrc={signImage2} 
                altText="Swim between the flags"
                title="Swim between the flags"
                facts="This symbol indicates it is a swimming area and you should swim between the red and yellow flags only."
                onMouseEnter={() => setHoveredItem('Sign2')}
                onMouseLeave={() => setHoveredItem(null)}
            />
                {/* Add more GalleryItem components for additional items */}
            </ul>
        );
    }
    function WarningSigns() {
        return (
            <div>
                <h2> Beach Warning Signs Guide </h2>
                <p>
                Warning signs are essential tools for promoting beach safety, 
                preventing accidents, and ensuring that beachgoers can enjoy the beach responsibly while minimizing risks to their health and well-being.
                </p>
                <ul>
                <li><a href="#currents">Hazards related to currents</a></li>
                <li><a href="#wildlife">Hazards due to wildlife</a></li>
                <li><a href="#weather">Hazards due to weather</a></li>
                </ul>
            </div>  
        );
    } 

    return (
        <div>
            <Header/>
            <div className='body'>
                <SwimmingSafety />
                <SignGallery />
                <WarningSigns />
            </div>
        </div>
    );
}


export default BeachSafety;