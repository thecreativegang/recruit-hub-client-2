import { faCircle, faCircleDot, faDotCircle } from '@fortawesome/free-regular-svg-icons';
import { faDivide, faListDots } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { formatDistanceStrict } from 'date-fns';
import { faDashcube, faLine } from '@fortawesome/free-brands-svg-icons';

const JobDetail = ({ selectedJob }) => {
    const { recruitersName, jobTitle, companyName, companySize, vacancies, jobNature, educationalQualification, jobRequirements, tags, deadlineDay, deadlineMonth, deadlineYear, payRange, companyLocation, publishedDate, applicantCount } = selectedJob
    return (
        <div className='mt-5 shadow-lg h-[100vh] overflow-y-auto pt-5 rounded-lg'>
            <h1 className='text-3xl '>{jobTitle}</h1>
            <div className='flex gap-4'>
                <p>{companyName} </p>
                <p>-</p>
                <p>{companyLocation || ""}</p>
                <p>-</p>
                {
                    publishedDate &&
                    <p>{formatDistanceStrict(new Date(publishedDate), new Date()) || ""}</p>
                }
                <p>-</p>
                {
                    applicantCount &&
                    <p>{applicantCount || 0} Applicants</p>
                }
            </div>

        </div>
    );
};

export default JobDetail;