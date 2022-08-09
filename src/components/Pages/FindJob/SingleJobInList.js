import React from 'react';
import { format, formatDistanceStrict, toDate } from 'date-fns';

const SingleJobInList = ({ job, setSelectedJob }) => {
    const { jobTitle, companyName, jobLocation, publishedDate } = job
    console.log(toDate(publishedDate))
    return (
        <div onClick={() => setSelectedJob(job)} className='bg-blue-100 p-3 rounded-lg hover:shadow-lg my-5'>
            <h1 className='text-2xl'>{jobTitle}</h1>
            <p>Company: {companyName}</p>
            <p>Location: {jobLocation}</p>
            <p className='text-zinc-500'>{formatDistanceStrict(new Date(publishedDate), new Date())}</p>
        </div>
    );
};

export default SingleJobInList;