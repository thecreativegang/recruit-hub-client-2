import React, { useRef, useState } from 'react';
import axios from 'axios';

const FilteringOptions = ({ searchElements, SetfilteringOn, setSearchedResults, searchedResults, setNoResultFound }) => {
    const { searchText, jobNature, companySize, payRange, } = searchElements;

    const searchRef = useRef("")
    const jobNatureRef = useRef("")
    const companySizeRef = useRef("")
    const payRangeRef = useRef("")
    const searchJob = (e) => {
        const searchData = {
            searchJobNature: jobNatureRef.current?.value,
            searchSearchText: searchRef.current?.value,
            searchCompanySize: companySizeRef.current?.value,
            searchPayRange: payRangeRef.current?.value,
        }
        console.log(searchData)
        axios.post(`http://localhost:3001/job/filter`, searchData)
            .then(function (res) {
                console.log(res.data.queries)
                if (res?.data?.message === 'No Filter Applied') {
                    SetfilteringOn(false);

                }
                if (res?.data?.result?.length !== 0) {
                    setSearchedResults(res?.data)
                    SetfilteringOn(true)
                    setNoResultFound(false)


                }
                else if (res?.data?.result?.length === 0) {
                    setSearchedResults(res?.data)
                    SetfilteringOn(false);
                    setNoResultFound(true)
                }
            })
            .catch(function (err) {
                if (err) {
                    console.log(err)
                }
            })
    }
    return (
        <div className='grid grid-cols-[2fr,3fr]  gap-5  items-center'>
            <div className='w-full'>
                <input ref={searchRef} onKeyUp={searchJob} type="text" className='input border border-zinc-400  w-full' placeholder='Search Jobs....' />
            </div>
            <div className='flex gap-2'>
                <div>
                    <select ref={jobNatureRef} onChange={searchJob} name="jobNature" id="jobNature" className='border border-black p-3 rounded-full bg-zinc-100'>
                        <option value="" className='capitalize'>Job Nature</option>
                        <option value="remote" className='capitalize'>Remote</option>
                        <option value="on-site" className='capitalize'>On-site</option>
                        <option value="hybrid" className='capitalize'>Hybrid</option>
                    </select>
                </div>
                <div>
                    <select ref={companySizeRef} onChange={searchJob} name="companySizeRef" id="companySizeRef" className='border border-black p-3 rounded-full bg-zinc-100'>
                        <option value="" >Company Size </option>
                        <option value="1-10" >1-10</option>
                        <option value="1-50" >1-50</option>
                        <option value="1-100" >1-100</option>
                        <option value="200+" >200+</option>
                        <option value="500+" >5000+</option>
                    </select>
                </div>
                <div>
                    <select ref={payRangeRef} onChange={searchJob} name="payRangeRef" id="payRangeRef" className='border border-black p-3 rounded-full bg-zinc-100'>
                        <option value="" >Pay Range</option>
                        <option value="50+" >$-50+</option>
                        <option value="100+" >$-100+</option>
                        <option value="150+" >$-150+</option>
                        <option value="200+" >$-200+</option>
                        <option value="300+" >$-300+</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilteringOptions;