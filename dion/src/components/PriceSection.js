import React from 'react';
import "../css/PriceSection.css";

function Form() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log('You clicked submit.');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
  }



const PriceSection = () => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }
    return (
        <div class="bookbutton-container">
            <div class="bookbutton-text">
                <span>From € 50.00</span>
                <span>Minimum purchase</span>
            </div>
        
            <div class="bookbutton">
                Buy Now
            </div>
        </div>

    );
}

export default PriceSection;