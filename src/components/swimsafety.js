import React, { useState } from 'react';
import signImage1 from '../data/sign1.png'; 
import signImage2 from '../data/sign2.png';
import '../styles/swim-safety.css';

function SwimSafety() {
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

    function SignGallery(){
        // State to track which item is currently hovered
        const [hoveredItem, setHoveredItem] = useState(null);
        return (
            <ul className="gallery">
                <GalleryItem
                    imageSrc={signImage1} 
                    altText="Dangerous Currents"
                    title="Dangerous Current"
                    facts="This symbol means, it is a dangerous current and you should not swim in that area"
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

    return (
        <div id="swim">
            <h2>Swimming Safety</h2>
            <p>
                Swimming at the beach can be both fun and refreshing, 
                but it's important to be aware of potential hazards and practice safety measures to prevent accidents.
            </p>       
            <h3>Swim Safety Tips for you!</h3>
            <ul>
                <li>Always swim in designated areas with lifeguards present, if possible.</li>
                <li>Check beach conditions, such as water temperature, currents, and weather forecasts, before entering the water.</li>
                <li>Never swim alone; always swim with a buddy or in groups.</li>
                <li>Learn to recognize and understand beach warning flags and signs.</li>
                <li>If caught in a rip current, remain calm, and swim parallel to the shore until you're out of the current.</li>
                <li>Avoid diving into unfamiliar or shallow water to prevent head and spinal injuries.</li>
            </ul>

            {/* Return the SignGallery component */}
            <SignGallery />
        </div>
    );
}

export default SwimSafety;
