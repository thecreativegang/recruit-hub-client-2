
import { createContext } from "react";
import axios from 'axios';
axios.get(`http://localhost:3001/user`)
    .then(function (res) {
        console.log('data inside userInfo', res?.data)
    })
    .then(function (err) {
        if (err) {
            console.log(err)
        }
    })


export const UserContext = createContext(null);