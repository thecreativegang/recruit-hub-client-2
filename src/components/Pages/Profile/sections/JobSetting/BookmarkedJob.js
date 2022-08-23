import React, { useEffect } from 'react';
import { serverLink } from './../../../../../utilities/links';
import axios from 'axios';

const BookmarkedJob = () => {
    useEffect(() => {
        axios.get(`${serverLink}/jobs/`)
    }, [])

    return (
        <div>

        </div>
    );
};

export default BookmarkedJob;