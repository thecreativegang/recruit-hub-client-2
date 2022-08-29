import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import checkTokenExpired from '../utilities/checkTokenExpired';
import { serverLink } from '../utilities/links';

const ResourceStore = () => {

    const [videoData, setVideoData] = useState([]);
    const navigate = useNavigate()


    const fetchAllResource = async () => {
        const data = await axios.get(`${serverLink}/resource`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(function (res) {
                setVideoData(res?.data);
            })
            .catch(function (err) {
                checkTokenExpired(err) === true && navigate('/login')
            })

    }
    useEffect(() => {
        fetchAllResource();
    }, [videoData])

    return { videoData }
};

export default ResourceStore;