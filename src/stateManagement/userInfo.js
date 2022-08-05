import { useQuery } from "@tanstack/react-query"
import axios from "axios"

 const userInfo=()=>{
    axios.get(`http://localhost:3001/user`)
    .then(function(res){
        console.log(res)
        .then(function(err){
            if(err){
                console.log(err)
            }
        })
    })
    return 11;
    
}
export {userInfo};