import axios from "axios"
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
const useToken = async (currentUser) => {
    const [token, setToken] = useState('');
    const email = currentUser?.email;
    const user = {
        email: currentUser?.email,
        username: currentUser?.username
    };
    console.log(user)
    useEffect(() => {
        if (email) {
            console.log('Inside uef')
            const targetUrl = 'https://safe-oasis-01130.herokuapp.com/user/create'
            axios.post(targetUrl, user)
                .then(data => {
                    console.log(data)
                    setToken(data.data.accessToken);
                    localStorage.setItem('accessToken', data.data.accessToken);
                })
                .then(function (err) {
                    if (err) {
                        console.log(err)
                    }
                })
        }

    }, [email])
    return [token];
}

export default useToken;