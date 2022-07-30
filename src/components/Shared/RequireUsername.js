import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const RequireUsername = ({ children }) => {
    const [hasUsername, setHasUsername] = useState(false);
    console.log(children)
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:3001/user/${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                }
            })
                .then(function (res) {
                    console.log(res.data.status)
                    if (res.status === 200) {
                        if (res?.data?.userInfo[0]?.username !== '') {
                            setHasUsername(true);
                        }
                    }
                    else {
                        setHasUsername(false)
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
    }
    else {
        return children
    }


};

export default RequireUsername;