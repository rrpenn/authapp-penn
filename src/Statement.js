// Statement.js
import React, { useState } from 'react';
import './styles.css';

const Statement = ({ index, text, onRatingChange }) => {
    const [rating, setRating] = useState(1); // default rating set to 1

    const handleSliderChange = (e) => {
        const value = Number(e.target.value);
        setRating(value); // update local slider value
        onRatingChange(index, value); // send updated value to parent component
    };

    return (
        <div className="statement">
            <p>{text}</p>
            <div className="slider-container">
                <input
                    type="range"
                    min="1"
                    max="7"
                    value={rating}
                    onChange={handleSliderChange}
                    className="slider"
                />
                <span className="slider-value">{rating}</span>
            </div>
        </div>
    );
};

export default Statement;