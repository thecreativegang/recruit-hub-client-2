import axios from "axios"
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
const useToken = async (currentUser) => {
    const [token, setToken] = useState('');
    const user = {
        email: currentUser?.email,
        username: currentUser?.username
    };
    useEffect(() => {
        console.log('user inside token', currentUser)
        console.log('user.email', user.email)
        if (user.email) {
            console.log('Inside uef')
            // https://safe-oasis-01130.herokuapp.com/
            const targetUrl = 'http://localhost:3001/user/create'
            axios.post(targetUrl, user)
                .then(function (res) {
                    console.log('res', res)
                    console.log(res?.data?.accesToken)
                    setToken(res?.data?.accessToken);
                    localStorage.setItem('accessToken', token);
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