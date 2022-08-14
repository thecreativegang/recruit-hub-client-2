import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const Review = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
    return (
        <div>
            <h1>From review</h1>
        </div>
    );
};

export default Review;