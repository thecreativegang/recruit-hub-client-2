import React from 'react';
import OurTeam from './OurTeam/OurTeam';
import Articles from '../Articles/Articles';
import RhubDesign from '../../../RhubDesign/RhubDesign';
import Footer from '../../../Shared/Footer/Footer';
import About from '../About/About';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <About></About>
            <Service></Service>
            <OurTeam></OurTeam>
            <Articles></Articles>
            <RhubDesign></RhubDesign>
            <Footer></Footer>
        </div>
    );
};
export default Home;