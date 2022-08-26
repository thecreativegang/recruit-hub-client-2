import React, { useEffect, useState } from 'react';
import { serverLink } from './../../../../../utilities/links';
import axios from 'axios';
import Loading from './../../../../Shared/Loading';
import { toast } from 'react-toastify';
import ManageBookmarkedJob from './ManageBookmarkedJob';

const BookmarkedJob = ({ Loading, setLoading }) => {
    const [bookmarkedJobs, setBookmarkedJobs] = useState([]);
    const [refetchBookmarkedJobs, setRefetchBookmarkedJobs] = useState(false);
    useEffect(() => {
        axios.get(`${serverLink}/job/bookmarked`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(function (res) {
                console.log(res?.data?.bookmarkedJobs)
                setBookmarkedJobs(res?.data?.bookmarkedJobs)
            })
            .catch(function (err) {
                toast.err(err?.message)
            })
        setLoading(false)
    }, [setLoading, refetchBookmarkedJobs])

    return (
        <div>
            <h1 className='text-2xl font-semibold text-center mt-10 mb-2'>Your Bookmarked Jobs</h1>
            <div>
                {
                    bookmarkedJobs?.map((singleHidden, index) => <ManageBookmarkedJob
                        key={singleHidden?._id}
                        job={singleHidden}
                        index={index}
                        refetch={setRefetchBookmarkedJobs}
                    ></ManageBookmarkedJob>)
                }
            </div>
        </div >
    );
};

export default BookmarkedJob;