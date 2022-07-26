import axios from "axios"
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
const useToken = async (currentUser) => {
    const [token, setToken] = useState('');
    const email = currentUser?.email;
    const user = {
        email: currentUser?.email
    };
    useEffect(() => {
        if (email) {
            const targetUrl = 'https://team-muslim-forum-26437.herokuapp.com/user'
            axios.post(targetUrl, user)
                .then(data => {
                    setToken(data.data.accessToken);
                    localStorage.setItem('accessToken', data.data.accessToken);
                })
                .then(function (error) {
                    toast.error((error?.message))
                })
        }

    }, [email])
    return [token];
}

export default useToken;