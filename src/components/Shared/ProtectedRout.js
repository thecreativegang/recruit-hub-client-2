import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { checkTokenExpired } from './../../utilities/checkTokenExpired';
import { serverLink } from './../../utilities/links';

const ProtectedRout = ({ children }) => {
    const [hasUsername, setHasUsername] = useState(true);
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    useEffect(() => {



        if (user) {
            console.log(localStorage.getItem('accessToken'));

            axios.get(`${serverLink}/user/all/${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            })
                .then(function (res) {
                    if (res.status === 200) {
                        if (res?.data?.userInfo[0]?.username === '') {
                            setHasUsername(false)
                        }
                    }
                    else {
                        setHasUsername(true);
                    }
                })
                .catch(function (err) {
                    checkTokenExpired(err) === true && navigate('/login')
                })
        }
        else if (!user) {
            return navigate('/login');
        }
        else {
            console.log('Email not found for protected route')
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

export default ProtectedRout;