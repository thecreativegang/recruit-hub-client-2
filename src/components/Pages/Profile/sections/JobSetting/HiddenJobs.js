import React, { useEffect, useState } from 'react';
import { serverLink } from './../../../../../utilities/links';
import axios from 'axios';
import { toast } from 'react-toastify';
import ManagehiddenJob from './ManagehiddenJob';

const HiddenJobs = ({ setLoading, loading }) => {
    const [hiddenJobs, setHiddenJobs] = useState([]);
    const [refetchHiddenJobs, setRefetchHiddenJobs] = useState(false);
    console.log('Loading', loading)
    useEffect(() => {
        axios.get(`${serverLink}/job/hidden`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(function (res) {
                console.log(res.data.hiddenJobs)
                setHiddenJobs(res?.data?.hiddenJobs)
                setLoading(false)

            })
            .catch(function (err) {
                toast.error(err.message)
                setLoading(false)

            })

    }, [loading, refetchHiddenJobs])

    return (
        <div>
            <h1 className='text-2xl font-semibold text-center mt-10 mb-2'>Your Hidden Jobs</h1>
            <div>
                {
                    hiddenJobs?.map((singleHidden, index) => <ManagehiddenJob
                        key={singleHidden?._id}
                        job={singleHidden}
                        index={index}
                        refetch={setRefetchHiddenJobs}
                    ></ManagehiddenJob>)
                }
            </div>
        </div>
    );
};

export default HiddenJobs;