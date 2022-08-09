import React from 'react';

const SingleJobInList = ({ job, setSelectedJob }) => {
    const { jobTitle, companyName, jobLocation } = job
    return (
        <div onClick={() => setSelectedJob(job)} className='bg-blue-100 p-3 rounded-lg hover:shadow-xl'>
            <h1 className='text-2xl'>{jobTitle}</h1>
            <p>Company: {companyName}</p>
            <p>Location: {jobLocation}</p>
            <p>posted: { }</p>
        </div>
    );
};

export default SingleJobInList;