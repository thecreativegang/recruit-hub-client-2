import React, { useState } from 'react';
import HiddenJobs from './HiddenJobs';
import BookmarkedJob from './BookmarkedJob';

const JobSettings = () => {
    const [showHiddenJobs, setShowHiddenJobs] = useState(false);
    const [loadingBookmarked, setLoadingBookmarked] = useState(false);
    const [loadingHidden, setLoadingHidden] = useState(false);
    const [showBookmarkedJobs, setShowBookmarkedJobs] = useState(false);

    return (
        <div className=" w-full  md:w-[732px] mx-auto mt-12 " id="jobSetting">
            <h2 className=" text-2xl md:text-4xl text-[#788894]">
                Job Settings
            </h2>
            <div className={`flex gap-5`}>
                <button onClick={() => {
                    setShowBookmarkedJobs(!showBookmarkedJobs)
                    setShowHiddenJobs(showBookmarkedJobs)
                    setLoadingBookmarked(!showHiddenJobs)
                }} className={`btn btn-primary ${loadingBookmarked && 'loading'} ${!showBookmarkedJobs ? 'bg-zinc-400' : 'btn-primary'}`}>Bookmarked Jobs</button>
                <button onClick={() => {
                    setShowHiddenJobs(!showHiddenJobs)
                    setShowBookmarkedJobs(showHiddenJobs)
                    setLoadingHidden(!showHiddenJobs)
                }} className={`btn  ${loadingHidden && 'loading'} ${!showHiddenJobs ? 'bg-zinc-400 b' : 'btn-primary'}`}>Hidden Jobs</button>
            </div>
            <div>
                {
                    showHiddenJobs &&
                    <HiddenJobs
                        loading={loadingHidden}
                        setLoading={setLoadingHidden} />
                }
            </div>
            <div>
                {
                    showBookmarkedJobs &&
                    <BookmarkedJob
                        loading={loadingBookmarked}
                        setLoading={setLoadingBookmarked} />
                }
            </div>
        </div>
    );
};

export default JobSettings;