import React from 'react';
import Home from './components/Home';
import About from './components/About';
import BuyTicket from './components/BuyTicket';
import Header from './components/Header';

import { Routes, Route, Link } from "react-router-dom";


function App() {

  return (
    <div>
              <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/BuyTicket">Buy Ticket</Link>
            </li>
          </ul>
        </nav>
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/BuyTicket" element={<BuyTicket />} />
        <Route path="/Header" element={<Header />} />
      </Routes>
    </div>
  );
}



export default App;