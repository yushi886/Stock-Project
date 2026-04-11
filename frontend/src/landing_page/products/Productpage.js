import React from 'react';
import Brokerage from './Brokerage';
import Hero from './Hero.js';
import Navbar from '../../Navbar.js';
import Footer from '../../Footer.js';
import Universe from './Universe.js';
import Leftsection from '../Leftsection.js';
import Rightsection from '../Rightsection.js';
function Productpage() {
    return (
        <>

            <Hero />
            <Leftsection
                imageURL="/media/kite.png"
                productName="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo="#"
                learnMore="#"
                googlePlay="https://play.google.com/store"
                appStore="https://www.apple.com/app-store/"
            />
            <Rightsection
            imageURL="/media/console.png"
                productName="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                learnMore="#"
            />
            <Leftsection
                imageURL="/media/coin.png"
                productName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo="#"
                learnMore="#"
                googlePlay="https://play.google.com/store"
                appStore="https://www.apple.com/app-store/"
            />
            <Rightsection
            imageURL="/media/kiteconnect.png"
                productName="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                learnMore="#"
            />
            <Leftsection
                imageURL="/media/varsity.png"
                productName="Varsity Mobile"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                tryDemo="#"
                learnMore="#"
                googlePlay="https://play.google.com/store"
                appStore="https://www.apple.com/app-store/"
            />
            <p className='text-center'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>

            <Universe />


        </>
    );
}

export default Productpage;