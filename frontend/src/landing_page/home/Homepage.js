import React from 'react';
import Hero from './Hero.js';
import Award from './Award.js';
import Stats from './Stats.js';
import Pricing from './Pricing.js';
import Education from './Education.js';
import OpenAccount from '../../OpenAccount.js';
import Navbar from '../../Navbar.js';
import Footer from '../../Footer.js';

function Homepage() {
    return (
        <>

            <Hero />
            <Award />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />

        </>
    );
}

export default Homepage;