import React from 'react';
import OurTeam from '../OurTeam/OurTeam';
import Articles from '../Articles/Articles';
import RhubDesign from '../../../RhubDesign/RhubDesign';
import Footer from '../../../Shared/Footer/Footer';
import About from '../About/About';
import Service from '../Service/Service';
import Banner from './../Banner/Banner';

import Agency from '../Agency/Agency';
import Contact from '../Contact/Contact';


const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Service />

            <Agency />

            <OurTeam />
            <Contact></Contact>
            <Articles />
            <RhubDesign />
            <Footer />
        </div>
    );
};
export default Home;