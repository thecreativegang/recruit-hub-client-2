import axios from "axios"
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { io } from "socket.io-client";
import { serverLink } from './../utilities/links';
const useToken = async (currentUser) => {
    const [token, setToken] = useState('');
    const user = {
        email: currentUser?.email,
        username: currentUser?.username,
        accountType: 'recruiter'
    };
    useEffect(() => {
        if (user.email) {
            // ${serverLink}/
            const targetUrl = `${serverLink}/user/create`
            axios.post(targetUrl, user)
                .then(function (res) {
                    setToken(res?.data?.accessToken);
                    localStorage.setItem('accessToken', res?.data?.accessToken);
                    localStorage.removeItem('accountType')
                    const socket = io(`${serverLink}`)
                    console.log('socket console.log', socket)
                })
                .then(function (err) {
                    if (err) {
                        console.log(err)
                    }
                })
        }
    }, [user.email])
    return [token];
}

export default useToken;