import React from 'react';
import FilteringOptions from './FilteringOptions';
import { useEffect } from 'react';

const FindJob = () => {


    const searchElements = {
        searchText: [],
        jobNature: "",
        companySize: "",
        payRange: ""
    }
    return (
        <div className='min-h-[100vh] container mx-auto mt-5 '>
            {/* Top section */}
            <div >

                <div>
                    <FilteringOptions searchElements={searchElements} />
                </div>
            </div>

            <div className='mt-10'>

            </div>
            <h1 className='text-3xl'>All jobs will be listed here!</h1>
        </div>
    );
};

export default FindJob;