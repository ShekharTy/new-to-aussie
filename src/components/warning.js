import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons
import signImage1 from '../data/yellow_flag.png'; 
import signImage2 from '../data/sign2.png';
import signImage3 from '../data/red_flag.png';
import '../styles/warning.css';

function Warning() {
    const sliderRef = useRef(null); // Reference to the Slider component

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

    // State to track the number of flags
    const [flagCounter, setFlagCounter] = useState(0);

    // Function to update the flag counter when changing slides
    const handleSlideChange = (currentSlide) => {
        setFlagCounter(currentSlide + 1); // Slide index starts from 0, so add 1
    };

    // Function to handle clicking on the left arrow
    const handleLeftArrowClick = () => {
        sliderRef.current.slickPrev(); // Go to the previous slide
    };

    // Function to handle clicking on the right arrow
    const handleRightArrowClick = () => {
        sliderRef.current.slickNext(); // Go to the next slide
    };

    return (
        <div id="swim">
            <h2>Learn Beach Warning Signs</h2>
            <p>
                Swimming.
            </p>       
            <h3>Swim Safety Tips for you!</h3>

            <Slider
                ref={sliderRef}
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                afterChange={handleSlideChange}
            >
                <GalleryItem
                    imageSrc={signImage1} 
                    altText="yellow flag"
                    title="Caution is required"
                    facts="Be careful of potential hazards in the water such as large waves or sharks"
                />
                <GalleryItem
                    imageSrc={signImage2} 
                    altText="Swim between the flags"
                    title="Swim between the flags"
                    facts="This symbol indicates it is a swimming area and you should swim between the red and yellow flags only."
                />
                <GalleryItem
                    imageSrc={signImage3} 
                    altText="red flag"
                    title="Extremely Dangerous"
                    facts="Extremely Dangerous.Should not enter the ocean"
                />
            </Slider>

            {/* Custom arrow components with click event handlers */}
            <div className="custom-arrows">
                <FaArrowLeft className="custom-arrow arrow-left" onClick={handleLeftArrowClick} />
                <FaArrowRight className="custom-arrow arrow-right" onClick={handleRightArrowClick} />
            </div>
            
            {/* Flag Counter */}
            <div className="flag-counter"> Flag {flagCounter} / 3</div>

        </div>
    );
}

export default Warning;
