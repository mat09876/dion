import React from 'react';
import "../css/Home.css";
import EventTitle from './EventTitle';
import PriceSection from './PriceSection';
import AboutSection from './AboutSection';
import Divider from './Divider';
import InviteYourFriend from './InviteYourFriend';
import CharityPartner from './CharityPartner';


const Home = () => {
    return (
        <div class="flex-container">
            <div class="flex-left">
                This will have content in the left box.
            </div>
            <div class="flex-right">
            <EventTitle/>
            <PriceSection/>
            <AboutSection/>
            <Divider/>
            <InviteYourFriend/>
            <Divider/>
            <CharityPartner/>
            </div>
        </div>

    );
}

export default Home;