import React, { useState } from 'react';
import HiddenJobs from './HiddenJobs';

const JobSettings = () => {
    const [showHiddenJobs, setShowHiddenJobs] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <div className=" w-full  md:w-[732px] mx-auto mt-12 " id="jobSetting">
            <h2 className=" text-2xl md:text-4xl text-[#788894]">
                Job Settings
            </h2>
            <div className={`flex gap-5`}>
                <button className={`btn btn-primary`}>Bookmarked Jobs</button>
                <button onClick={() => {
                    setShowHiddenJobs(!showHiddenJobs)
                    setLoading(!showHiddenJobs)
                }} className={`  ${loading && 'loading'} ${!showHiddenJobs ? 'bg-zinc-400' : 'btn-primary'}`}>Hidden Jobs</button>
            </div>
            <div>
                {
                    showHiddenJobs &&
                    <HiddenJobs
                        loading={loading}
                        setLoading={setLoading} />
                }
            </div>
        </div>
    );
};

export default JobSettings;