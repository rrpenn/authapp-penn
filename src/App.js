// App.js
import React, { useState } from 'react';
import Statement from './Statement';
import Modal from './Modal';
import './styles.css';

const App = () => {
    const [responses, setResponses] = useState(Array(12).fill(1));
    const [result, setResult] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const statements = [
        "I think it’s better to be yourself than to be popular.",
        "I don’t know how I really feel inside.",
        "I’m strongly influenced by the opinions of others.",
        "I usually do what others tell me to do.",
        "I always feel I need to do what others expect me to do.",
        "Other people influence me greatly.",
        "I feel as if I don’t know myself very well.",
        "I always stand by what I believe in.",
        "I’m true to myself in most situations.",
        "I feel out of touch with the ‘real me.’",
        "I live according to my values and beliefs.",
        "I feel alienated from myself."
    ];

    const calculateResult = () => {
        const knowYourselfScore = responses[1] + responses[6] + responses[9] + responses[11];
        const ownYourselfScore = responses[2] + responses[3] + responses[4] + responses[5];
        const beYourselfScore = responses[0] + responses[7] + responses[8] + responses[10];

        if (knowYourselfScore >= 12) {
            setResult("Know Yourself");
        } else if (ownYourselfScore >= 12) {
            setResult("Own Yourself");
        } else if (beYourselfScore >= 20) {
            setResult("Be Yourself");
        } else {
            setResult("No specific category.");
        }
        setShowModal(true); // Show the modal with results
    };

    const handleRatingChange = (index, rating) => {
        const newResponses = [...responses];
        newResponses[index] = rating;
        setResponses(newResponses);
    };

    const isAllRated = responses.every(response => response !== null);

    return (
        <div className="app">
            <h1 className="title">Authenticity Self-Assessment</h1>
            <p className="instructions">
                <span>Rate each of the following from</span><br />
                <span className="bold-text">1 (doesn’t describe me at all) to 7 (describes me very well.)</span>
            </p>
            <div className="statements">
                {statements.map((statement, index) => (
                    <Statement
                        key={index}
                        index={index}
                        text={statement}
                        onRatingChange={handleRatingChange}
                    />
                ))}
            </div>
            <button
                className={`submit-btn ${!isAllRated ? "disabled" : ""}`}
                onClick={calculateResult}
                disabled={!isAllRated}
            >
                Submit
            </button>
            {showModal && <Modal category={result} onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default App;