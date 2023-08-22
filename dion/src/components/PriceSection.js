import React from 'react';
import "../css/PriceSection.css";
import BookButton from './BookButton';


const PriceSection = () => {

    return (
        <div class="bookbutton-container">
            <div class="bookbutton-text">
                <span>From € 50.00</span>
                <span>Minimum purchase</span>
            </div>
            <BookButton/>
        </div>

    );
}

export default PriceSection;