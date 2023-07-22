import React from 'react';
import "../css/PriceSection.css";





const BookButton = () => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }
    return (
        <div class="bookbutton-container">        
            <div class="bookbutton">
                Buy Now
            </div>
        </div>

    );
}

export default BookButton;