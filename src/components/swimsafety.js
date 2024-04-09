import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/swim-safety.css';

// Array of image data
const imageData = [
    {
        imageSrc: require('../data/yellow_flag.png'),
        altText: 'yellow flag',
        title: 'Caution is required',
        facts: 'Be careful of potential hazards in the water such as large waves or sharks'
    },
    {
        imageSrc: require('../data/sign2.png'),
        altText: 'Swim between the flags',
        title: 'Swim between the flags',
        facts: 'This symbol indicates it is a swimming area and you should swim between the red and yellow flags only.'
    },
    {
        imageSrc: require('../data/red_flag.png'),
        altText: 'red flag',
        title: 'Red flag',
        facts: 'Extremely Dangerous. Should not enter the ocean'
    },
    {
        imageSrc: require('../data/black_white_flag.png'),
        altText: 'black white flag',
        title: 'Black and White Flag',
        facts: 'Surfcraft riding area boundary. Avoid swimming in surfcraft areas if at all possible.'
    },
    {
        imageSrc: require('../data/red_white_flag.png'),
        altText: 'red white flag',
        title: 'Red and White Flag',
        facts: 'Emergency evacuation. Evacuate the water immediately for a variety of reasons, including sharks and hurricanes.'
    },
    {
        imageSrc: require('../data/no_alcohol.png'),
        altText: 'No alcohol',
        title: 'No alcohol',
        facts: 'No alcohol is allowed in the area.'
    },
    {
        imageSrc: require('../data/no_frame.png'),
        altText: 'No flame',
        title: 'No flame',
        facts: 'Open flames or the use of fire are prohibited in the area..'
    },
    {
        imageSrc: require('../data/no_swimming.png'),
        altText: 'No Swimming',
        title: 'No Swimming',
        facts: 'No swimming is allowed in the area..'
    },
    {
        imageSrc: require('../data/no_vehicle.png'),
        altText: 'No Vehicle',
        title: 'No Vehicle',
        facts: 'No vehicles are allowed in the area...'
    },
    {
        imageSrc: require('../data/no_camping.png'),
        altText: 'No Camping',
        title: 'No Camping',
        facts: 'Camping is prohibited in the area.'
    },
    {
        imageSrc: require('../data/no_fishing.png'),
        altText: 'No Fishing',
        title: 'No Fishing',
        facts: 'Fishing is prohibited in the area.'
    },
    {
        imageSrc: require('../data/no_dogs.png'),
        altText: 'No Dogs',
        title: 'No Dogs',
        facts: 'No dogs are allowed in the area...'
    },
    {
        imageSrc: require('../data/no_vessels.png'),
        altText: 'No Vessels',
        title: 'No Vessels',
        facts: 'Vessels, such as boats, jet skis, or other watercraft, is not allowed in the area.'
    },
    {
        imageSrc: require('../data/no_water_ski.png'),
        altText: 'No Sking',
        title: 'No Sking',
        facts: 'No Water skiing is prohibited in the area.'
    },

];

function SwimSafety() {
    const sliderRef = useRef(null); // Reference to the Slider component

    // State to track the number of flags
    const [flagCounter, setFlagCounter] = useState(0);

    // Function to update the flag counter when changing slides
    const handleSlideChange = (currentSlide) => {
        setFlagCounter(currentSlide + 1); // Slide index starts from 0, so add 1
    };

    // Function to handle clicking on the previous button
    const prevSlide = () => {
        sliderRef.current.slickPrev(); // Go to the previous slide
    };

    // Function to handle clicking on the next button
    const nextSlide = () => {
        sliderRef.current.slickNext(); // Go to the next slide
    };

    return (
        <div id="swim">
            <h2>Welcome to the section dedicated to beach safety learning!</h2> 
            <p className="InstructionsSwimFlags">Click on the below previous and next buttons to learn about each flag's meanings.</p>
            <div className="flag-box">
            <Slider
                ref={sliderRef}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                afterChange={handleSlideChange}
            >
                {imageData.map((item, index) => (
                    <GalleryItem
                        key={index}
                        imageSrc={item.imageSrc}
                        altText={item.altText}
                        title={item.title}
                        facts={item.facts}
                    />
                ))}
            </Slider>

            {/* Flag Counter */}
            <div className="flag-counter"> Flag {flagCounter} / {imageData.length}</div>

            {/* Navigation buttons */}
            <div className="navigation-buttons">
                <button onClick={prevSlide} style={{ backgroundColor: 'blue' }}>Previous Flag</button>
                <button onClick={nextSlide} style={{ backgroundColor: 'blue' }}>Next Flag</button>
            </div>
        </div>
    </div>
    );
}

function GalleryItem({ imageSrc, altText, title, facts }) {
    return (
        <div className="gallery-item">
            <img className="gallery-item__image" src={imageSrc} alt={altText} />
            <div className="gallery-item__text">
                <div className="gallery-item__title">{title}</div>
                <div className="gallery-item__facts">{facts}</div>
            </div>
        </div>
    );
}

export default SwimSafety;
