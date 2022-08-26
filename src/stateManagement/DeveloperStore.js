import { useEffect, useState } from 'react';

const DeveloperStore = () => {

    //developer info storage 
    const [devLoading, setDevLoading] = useState(true)
    const [devError, setDevError] = useState({})
    const [devData, setDevData] = useState([])

    // Get developer information form developer api
    useEffect(() => {
        fetch("http://localhost:3001/user/developer", {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(req => req.json())
            .then(data => setDevData(data))
            .catch(err => setDevError(err))
        setDevLoading(false)
    }, [devError])

    console.log(devData)
    return { developer: [devData, devError, devLoading] }
};

export default DeveloperStore;