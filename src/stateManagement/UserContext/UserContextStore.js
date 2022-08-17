import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const UserStore = createContext()

const UserStoreProvider = ({ children }) => {


    //get user data with auth
    const [globalUser] = useAuthState(auth)
    const userEmail = globalUser?.email

    const [user, setUser] = useState([])

    // Get user data form api

    useEffect(() => {
        if (userEmail) {
            axios.get(`http://localhost:3001/user/email/${userEmail}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                }
            })
                .then(res => setUser(res.data))

                .catch(err => console.error(err))
        }

        else {
            console.log('Email not found from useContex')
        }
    }, [userEmail])


    //this state stored user data  //==> Don't move this one !
    const userData = {
        userEmail,
        user,
    }
    //user context provider component //==> Don't move this one !
    return (
        <UserStore.Provider value={userData}>
            {children}
        </UserStore.Provider>
    )
}



export { UserStore, UserStoreProvider }