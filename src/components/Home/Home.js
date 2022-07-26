import React from 'react';
import Articles from '../Articles/Articles';
import Footer from '../Footer/Footer';
import RhubDesign from '../RhubDesign/RhubDesign';

const Home = () => {
    return (
        <div>
            <h1 className='text-3xl'>Home</h1>
            <Articles></Articles>
            <RhubDesign></RhubDesign>
            <Footer></Footer>
        </div>
    );
};

export default Home;