import React from 'react';
import "../css/EventTitle.css";
import location from '../assets/location.svg';



const EventTitle = () => {
    return (
        <div class="title-container">
            <div class="event-name">
               Big Love
            </div>
            <div class="event-date">
            Marley Grange Fri 7 Jun 2023, 19:00 pm
            </div>
            <div class="event-location">
            <img src={location} alt="Dion Logo" />  Dublin
            </div>
        </div>

    );
}

export default EventTitle;