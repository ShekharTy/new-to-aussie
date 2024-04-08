import React, { useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/attribution.css';

function Attributions() {
    useEffect(() => {
        document.title = `Attributions`;
    });

    return (
        <div className="page-container">
            <Header />
            <main className="content-wrap">
                <h1>Image Attributions</h1>
                <p>All images and logos used on this site are sourced from Unsplash, Pixabay, VicRoads, and BeachSafe, and are free to use under their respective licenses. We are grateful to the following photographers and organizations for their contributions:</p>
                
                <h2>Unsplash</h2>
                <ul>
                    <li><a href="https://unsplash.com/photos/brown-rock-formation-on-sea-shore-during-daytime-d8erF1AHChw" target="_blank" rel="noopener noreferrer">Photo by Wee Ping Khoo on Unsplash</a></li>
                    <li><a href="https://unsplash.com/photos/long-straight-road-with-trees-on-the-side-rafblRbne3o" target="_blank" rel="noopener noreferrer">Photo by Karsten Würth on Unsplash</a></li>
                    <li><a href="https://unsplash.com/photos/a-sandy-beach-next-to-a-lush-green-hillside-zjn-7G1OR5s" target="_blank" rel="noopener noreferrer">Photo by Huzaifa Tariq on Unsplash</a></li>
                </ul>

                <h2>iStock</h2>
                <ul>
                    <li>Image by <a href="https://www.istockphoto.com/photo/calling-roadside-assistance-gm1271779268-374255021?searchscope=image%2Cfilm" target="_blank" rel="noopener noreferrer">urbazon </a> from iStockphoto</li>
                </ul>
                <h2>Pixabay</h2>
                <ul>
                    <li>Image by <a href="https://pixabay.com/photos/crash-test-collision-1620591/" target="_blank" rel="noopener noreferrer">Pixel-mixer </a> from Pixabay</li>
                    <li>Image by <a href="https://pixabay.com/photos/river-flood-rain-disaster-risk-4353093/" target="_blank" rel="noopener noreferrer">Ray_Shrewsberry </a> from Pixabay</li>
                    <li>Image by <a href="https://pixabay.com/photos/fire-fighters-blue-light-4272012/" target="_blank" rel="noopener noreferrer">ReinhardThrainer </a> from Pixabay</li>
                </ul>
                <h2>VicRoads and BeachSafe</h2>
                <p>Additional resources and information provided by VicRoads and BeachSafe have been invaluable in creating content for this website.</p>
                
                <p>We thank these organizations for making their resources available to the public and supporting safety awareness.</p>
            </main>
            <Footer />
        </div>
    );
}

export default Attributions;
