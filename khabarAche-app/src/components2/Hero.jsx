import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [isBlurred, setIsBlurred] = useState(true);

    const toggleBlur = () => {
        setIsBlurred(prevState => !prevState);
    };

    return (
        <div className={`hero ${isBlurred ? 'blur-active' : ''}`} onClick={toggleBlur}>
            <div className="hero-contents">
                <h2>Grab the opportunities to donate</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the foods.</p>
                <button>View Menu</button>
            </div>
        </div>
    );
};

export default Hero;
