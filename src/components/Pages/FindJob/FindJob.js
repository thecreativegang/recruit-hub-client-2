import React, { useState } from 'react';
import FilteringOptions from './FilteringOptions';
import { useEffect } from 'react';
import axios from 'axios';
import Loading from '../../Shared/Loading';
import { toast } from 'react-toastify';
import SingleJobInList from './SingleJobInList';
import JobDetail from './JobDetail';

const FindJob = () => {
    const [refetch, setRefetch] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState([]);
    const [filteringOn, SetfilteringOn] = useState(false);
    const [searchedResults, setSearchedResults] = useState([]);

    console.log(searchedResults)
    const searchElements = {
        searchText: [],
        jobNature: "",
        companySize: "",
        payRange: ""
    }
    console.log(jobs)
    useEffect(() => {
        axios.get(`http://localhost:3001/job`)
            .then(function (res) {
                console.log(res.data.jobs)
                setJobs(res?.data?.jobs)
            })
            .then(function (err) {
                toast.error(err?.message)
            })
    }, [])


    return (
        <div className='min-h-[100vh] container mx-auto mt-5 '>
            {/* Top section */}
            <div>
                <FilteringOptions
                    setSearchedResults={setSearchedResults}
                    searchedResults={searchedResults}
                    SetfilteringOn={SetfilteringOn}
                    setJobs={setJobs}
                    searchElements={searchElements} />
            </div>

            <div className='grid grid-cols-[2fr,3fr] gap-5'>
                <div className='h-[100vh] overflow-y-scroll shadow-md mt-10 p-3 '>
                    {/* All jobs will be listed down below */}
                    {
                        <div >
                            {
                                (!filteringOn ? jobs : searchedResults).map((job, index) => <SingleJobInList
                                    index={index}
                                    key={job._id}
                                    job={job}
                                    setSelectedJob={setSelectedJob}
                                    selectedJob={selectedJob}
                                ></SingleJobInList>

                                )
                            }
                        </div>



                    }

                    {/* Job details will be shown here */}
                </div >
                <div>
                    <JobDetail selectedJob={selectedJob} />
                </div>
            </div >
        </div>
    );
};

export default FindJob;