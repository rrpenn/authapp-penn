// Result.js
import React from 'react';
import './styles.css';

const insights = {
    "Know Yourself": "Authentic people know their likes/dislikes, strengths/weaknesses, are honest with themselves, and are open to others’ viewpoints.",
    "Own Yourself": "Authentic people resist external influences, stand their ground, and act based on their values.",
    "Be Yourself": "Authentic people express themselves with tact, are transparent, and credible."
};

const Result = ({ category }) => (
    <div className="result animate">
        <h2>{category}</h2>
        <p>{insights[category]}</p>
    </div>
);

export default Result;