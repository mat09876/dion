import React from 'react';
import "../css/PriceSection.css";
import BuyTicket from './BuyTicket';
import { Routes, Route, Link } from "react-router-dom";




function BookButton() {

    return (
      <div>
          <div class="bookbutton-container">        
            <div class="bookbutton">
            <Link to="/BuyTicket">Buy Ticket</Link>
            </div>
        </div>
        <Routes>
          <Route path="/BuyTicket" element={<BuyTicket />} />
        </Routes>
      </div>
    );
  }

export default BookButton;