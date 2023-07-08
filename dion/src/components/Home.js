import React from 'react';
import "../css/Home.css";
import EventTitle from './EventTitle';


const Home = () => {
    return (
        <div class="flex-container">
            <div class="flex-left">
                This will have content in the left box.
            </div>
            <div class="flex-right">
            <EventTitle/>
            </div>
        </div>

    );
}

export default Home;