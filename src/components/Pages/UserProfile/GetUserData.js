import axios from "axios";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { serverLink } from "../../../utilities/links";



const GetUserData = async () => {
    const [loading, serLoading] = useState(true);
    const [data, serData] = useState({});

    const [user] = useAuthState(auth)
    const email = user?.email

    console.log(email)

    useEffect(() => {
        serLoading(true)
        axios.get(`${serverLink}/user/email/${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then((res) => {
                if (res?.data) {
                    serData(res?.data)
                    serLoading(false)
                }
            })
    }, [email])

    return [data, loading]

};

export default GetUserData;