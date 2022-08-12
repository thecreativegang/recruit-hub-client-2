import { faCircle, faCircleDot, faDotCircle } from '@fortawesome/free-regular-svg-icons';
import { faDivide, faListDots } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { formatDistanceStrict } from 'date-fns';
import { faDashcube, faLine } from '@fortawesome/free-brands-svg-icons';

const JobDetail = ({ selectedJob }) => {
    const { recruitersName, jobTitle, companyName, companySize, vacancies, jobNature, educationalQualification, jobRequirements, tags, deadlineDay, deadlineMonth, deadlineYear, payRange, companyLocation, publishedDate, applicantCount } = selectedJob
    return (
        <div className='mt-5 shadow-lg h-[100vh] overflow-y-auto p-5 rounded-lg'>
            <h1 className='text-3xl '>{jobTitle}</h1>
            <div className='flex flex-col gap-1 mt-5'>
                <p>Organization: {companyName} </p>
                {
                    companyLocation &&
                    <p>Location: {companyLocation || ""}</p>

                }
                {
                    companySize &&
                    <p>Organization size: {companySize} Employees</p>
                }
                {
                    publishedDate &&
                    <p>Posted: {formatDistanceStrict(new Date(publishedDate), new Date()) + " ago" || ""} </p>
                }
                {

                    <p>Applied: {applicantCount || 0} Applicants</p>
                }
                {
                    jobNature &&
                    <p>Job Type: {jobNature}</p>

                }
                {
                    vacancies &&
                    <p>Vacancies: {vacancies}</p>
                }


            </div>
            {/* Job Requirements */}
            <div>
                <p className={`underline text-xl mt-20 mb-5`}>Job Requirements</p>
                <p>{jobRequirements}</p>
            </div>

            {/* Educational Requirements */}
            <div>
                <p className={`underline text-xl mt-20 mb-5`}>Educational Qualifications</p>
                <p>{educationalQualification}</p>
            </div>

            {/* Job Requirements */}
            <div>
                <p className={`underline text-xl mt-20 mb-5`}>Job Requirements</p>
                <p>{jobRequirements}</p>
            </div>

        </div>
    );
};

export default JobDetail;