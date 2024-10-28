// Modal.js
import React from 'react';
import './styles.css';
import { jsPDF } from 'jspdf';

const Modal = ({ category, onClose }) => {
    // Extended insights with structured content for each category
    const insights = {
        "Know Yourself": {
            keyTraits: [
                "Self-aware of likes and dislikes",
                "Understands strengths and weaknesses",
                "Honest with oneself",
                "Open to others’ viewpoints"
            ],
            guidance: "Leverage your self-awareness to make balanced decisions and lead with empathy in the workplace.",
            deeperInsights: "Knowing yourself well helps you set boundaries, recognize your emotional responses, and maintain authenticity, which can foster trust and respect among your colleagues."
        },
        "Own Yourself": {
            keyTraits: [
                "Resists external influences",
                "Stands firm on personal values",
                "Acts based on individual beliefs"
            ],
            guidance: "Use your strong sense of self to set clear goals and not be swayed easily by changing opinions. This can help you be a reliable team player or leader.",
            deeperInsights: "Owning yourself is about being assertive and consistent in your values, which builds credibility and allows others to depend on your judgment."
        },
        "Be Yourself": {
            keyTraits: [
                "Expresses oneself with tact",
                "Transparent in communication",
                "Builds credibility and trust"
            ],
            guidance: "Your authentic communication can help create an open work environment where people feel comfortable being themselves.",
            deeperInsights: "Being yourself allows you to communicate openly and confidently, which fosters transparency and strengthens workplace relationships."
        }
    };

    // Function to download PDF with styled containers
    const downloadPDF = () => {
        const doc = new jsPDF();
        
        // Title
        doc.setFont("helvetica", "bold");
        doc.setFontSize(20);
        doc.setTextColor("#1c1a31"); // Primary color
        doc.text("Authenticity Self-Assessment Results", 105, 20, null, null, "center");

        // Define container dimensions and spacing
        const startX = 15;
        const containerWidth = 180;
        const containerHeight = 30;
        const padding = 10;
        let startY = 35;

        // Helper function to draw rounded rectangles with shadow effect
        const drawContainer = (x, y, width, height) => {
            doc.setFillColor(245, 245, 245); // Light gray shadow effect
            doc.roundedRect(x + 1, y + 1, width, height, 3, 3, "F"); // Shadow layer
            doc.setFillColor(255, 255, 255); // White background for main container
            doc.setDrawColor(200, 200, 200); // Light gray border
            doc.roundedRect(x, y, width, height, 3, 3, "FD"); // Rounded rectangle with border
        };

        // CATEGORY SECTION
        drawContainer(startX, startY, containerWidth, containerHeight);
        doc.setTextColor("#7e46d8");
        doc.setFontSize(14);
        doc.text("Category:", startX + padding, startY + 10);
        doc.setFont("helvetica", "bold");
        doc.setTextColor("#1c1a31"); // Primary color for text
        doc.text(`You fall into the ${category} category`, startX + padding, startY + 20);
        startY += containerHeight + 10;

        // KEY TRAITS SECTION
        const keyTraitsHeight = containerHeight + insights[category].keyTraits.length * 10;
        drawContainer(startX, startY, containerWidth, keyTraitsHeight);
        doc.setTextColor("#7e46d8");
        doc.setFontSize(14);
        doc.text("Key Traits:", startX + padding, startY + 10);
        doc.setTextColor("#1c1a31");
        doc.setFont("helvetica", "normal");
        insights[category].keyTraits.forEach((trait, index) => {
            doc.text(`• ${trait}`, startX + padding + 5, startY + 20 + index * 10);
        });
        startY += keyTraitsHeight + 10;

        // GUIDANCE SECTION
        const guidanceHeight = containerHeight + 20;
        drawContainer(startX, startY, containerWidth, guidanceHeight);
        doc.setTextColor("#7e46d8");
        doc.setFontSize(14);
        doc.text("Guidance:", startX + padding, startY + 10);
        doc.setTextColor("#1c1a31");
        doc.text(insights[category].guidance, startX + padding, startY + 20, { maxWidth: 160 });
        startY += guidanceHeight + 10;

        // DEEPER INSIGHTS SECTION
        const insightsHeight = containerHeight + 30;
        drawContainer(startX, startY, containerWidth, insightsHeight);
        doc.setTextColor("#7e46d8");
        doc.setFontSize(14);
        doc.text("Deeper Insights:", startX + padding, startY + 10);
        doc.setTextColor("#1c1a31");
        doc.text(insights[category].deeperInsights, startX + padding, startY + 20, { maxWidth: 160 });

        // Save the PDF
        doc.save("Authenticity_Self_Assessment_Results.pdf");
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-icon" onClick={onClose}>×</button>
                <h2>{category}</h2>
                <p>{insights[category].guidance}</p>
                <button className="download-btn" onClick={downloadPDF}>Download Results</button>
            </div>
        </div>
    );
};

export default Modal;