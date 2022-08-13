import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import AskForUsername from './AskForUsername';
import { useNavigate } from 'react-router-dom';

const RequireUsername = ({ children }) => {
    const [hasUsername, setHasUsername] = useState(true);
    const navigate = useNavigate()
    console.log(children)
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (!user) {
            return navigate('/login');
        }
        else if (user?.email) {
            axios.get(`https://safe-oasis-01130.herokuapp.com/user/${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                }
            })
                .then(function (res) {
                    console.log(res.data.status)
                    if (res.status === 200) {
                        if (res?.data?.userInfo[0]?.username === '') {
                            setHasUsername(false)
                        }
                    }
                    else {
                        setHasUsername(true);
                    }
                })
                .then(function (error) {
                    console.log(error)
                })
        }
        else {
            console.log('Email not found')
        }

    }, [user])

    if (user) {
        if (hasUsername) {
            return children
        }
        else {
            return navigate('/askUsername')
        }
    }
    else {
        return children
    }


};

export default RequireUsername;