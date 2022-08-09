import React from 'react';

const FilteringOptions = ({ searchElements }) => {
    const { searchText, jobNature, companySize, payRange } = searchElements;
    return (
        <div className='grid grid-cols-[2fr,3fr]  gap-5  items-center'>
            <div className='w-full'>
                <input onKeyUp={(e) => {
                    if (e.key === " ") {
                        console.log("Space button pressed")
                    }
                }} type="text" className='input border border-zinc-400  w-full' placeholder='Search Jobs....' />
            </div>
            <div className='flex gap-2'>
                <div>
                    <select name="jobType" id="jobType" className='border border-black p-3 rounded-full bg-zinc-100'>
                        <option value="" className='capitalize'>Select Job Nature</option>
                        <option value="remote" className='capitalize'>Remote</option>
                        <option value="on-site" className='capitalize'>On-site</option>
                        <option value="hybrid" className='capitalize'>Hybrid</option>
                    </select>
                </div>
                <div>
                    <select name="jobType" id="jobType" className='border border-black p-3 rounded-full bg-zinc-100'>
                        <option value="">Company Size</option>
                        <option value="1-10" >1-10</option>
                        <option value="1-50" >1-50</option>
                        <option value="1-100" >1-100</option>
                        <option value="200+" >200+</option>
                        <option value="500+" >5000+</option>
                    </select>
                </div>
                <div>
                    <select name="jobType" id="jobType" className='border border-black p-3 rounded-full bg-zinc-100'>
                        <option value="">Pay Range</option>
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