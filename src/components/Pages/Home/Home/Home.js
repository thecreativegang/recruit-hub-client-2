import React from 'react';
import OurTeam from '../OurTeam/OurTeam';
import Articles from '../Articles/Articles';
import RhubDesign from '../../../RhubDesign/RhubDesign';
import Footer from '../../../Shared/Footer/Footer';
import About from '../About/About';
import Service from '../Service/Service';
import Banner from './../Banner/Banner';
import Experience from '../Experience/Experience';
import Agency from '../Agency/Agency';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='mx-[10%]'>
            <Banner />
            <About />
            <Service />
            <Experience />
            <Agency />
            <Testimonials />
            <OurTeam />
            <Articles />
            <RhubDesign />
            <Footer />
        </div>
    );
};
export default Home;