import React, { useState } from 'react';
import { format, formatDistanceStrict, toDate } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBookBookmark, faBookmark, faEyeSlash, faSave } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import axios from 'axios';
import { serverLink } from './../../../utilities/links';
import { toast } from 'react-toastify';

const SingleJobInList = ({ job, setSelectedJob, selectedJob, index, setShowJobDetail, setRefetchAllJob }) => {
    const { jobTitle, companyName, jobLocation, publishedDate, _id } = job
    const [setSelected, setSetSelected] = useState(false);
    if (index === 0 && !setSelected) {
        setSelectedJob(job)
        setSetSelected(true)
    }

    // Handle Hide Job Function
    const handleHideJob = async (id) => {
        await axios.post(`${serverLink}/user/hideJob/${id}`, {}, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(function (res) {
                console.log(res)
                setRefetchAllJob(true)
            })
            .catch(function (err) {
                console.log(err)
            })
    }


    // Handle bookmarked Job
    const handleBookmarkJob = async (id) => {
        await axios.post(`${serverLink}/user/bookmarkedJobs/${id}`, {}, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(function (res) {
                console.log(res.data.modifiedCount)
                if (res?.data?.modifiedCount) {
                    toast.success('Successfully added to bookmarked')
                }
                setRefetchAllJob(true)

            })
            .catch(function (err) {
                toast.err(err?.message)
            })
    }
    return (
        <div onClick={() => {
            setSelectedJob(job)
            setShowJobDetail(true)
        }} className={`border-b border-zinc-400 p-3 rounded-lg ${_id === selectedJob?._id ? "shadow-xl bg-zinc-200" : ""} hover:shadow-lg my-5 flex items-center justify-between `}>
            <div>
                <h1 className='text-2xl text-black'>{jobTitle}</h1>
                <p className={`text-black`}>Company: {companyName}</p>
                <p className={`text-black`}>Location: {jobLocation}</p>
                {
                    publishedDate &&
                    <p className='text-zinc-500'>{formatDistanceStrict(new Date(publishedDate), new Date())}</p>
                }
            </div>
            <div className={`flex gap-5 relative `}>

                {/* Hide Job  */}
                <p onClick={() => handleHideJob(_id)} className={`tooltip`} data-tip="Hide this post">
                    <FontAwesomeIcon icon={faEyeSlash} className={`text-black hover:text-primary text-xl`} />
                </p>

                {/* Bookmark Job  */}
                <p onClick={() => handleBookmarkJob(_id)} className={`tooltip-left tooltip`} data-tip="Bookmark this job">
                    <FontAwesomeIcon icon={faBookmark} className={`text-black hover:text-primary text-xl`} />
                </p>
            </div>
        </div >
    );
};

export default SingleJobInList;