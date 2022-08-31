import React from 'react';
import Articles from '../Articles/Articles';

import Footer from '../../../Shared/Footer/Footer';
import About from '../About/About';
import Service from '../Service/Service';
import Banner from './../Banner/Banner';

import Agency from '../Agency/Agency';
import OurTeam from '../OurTeam/OurTeam';



const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Service />

            <Agency />

            <OurTeam></OurTeam>
            <Articles />


        </div>
    );
};
export default Home;