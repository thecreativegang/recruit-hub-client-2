import React from 'react';
import { format, formatDistanceStrict, toDate } from 'date-fns';

const SingleJobInList = ({ job, setSelectedJob, selectedJob }) => {
    const { jobTitle, companyName, jobLocation, publishedDate, _id } = job
    console.log(toDate(publishedDate))
    return (
        <div onClick={() => setSelectedJob(job)} className={`border-b border-zinc-400 p-3 rounded-lg ${_id === selectedJob?._id ? "shadow-xl bg-zinc-200" : ""} hover:shadow-lg my-5`}>
            <h1 className='text-2xl'>{jobTitle}</h1>
            <p>Company: {companyName}</p>
            <p>Location: {jobLocation}</p>
            {
                publishedDate &&
                <p className='text-zinc-500'>{formatDistanceStrict(new Date(publishedDate), new Date())}</p>

            }
        </div>
    );
};

export default SingleJobInList;