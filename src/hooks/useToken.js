import axios from "axios"
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
const useToken = async (currentUser) => {
    const [token, setToken] = useState('');
    const user = {
        email: currentUser?.email,
        username: currentUser?.username,
        accountType: 'recruiter'
    };
    useEffect(() => {
        if (user.email) {
            // https://safe-oasis-01130.herokuapp.com/
            const targetUrl = 'http://localhost:3001/user/create'
            axios.post(targetUrl, user)
                .then(function (res) {
                    setToken(res?.data?.accessToken);
                    localStorage.setItem('accessToken', res?.data?.accessToken);
                    localStorage.removeItem('accountType')
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