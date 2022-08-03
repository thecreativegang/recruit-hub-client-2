import React from 'react';
import { useForm } from 'react-hook-form';

const PostAJob = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

            </form>
        </div>
    );
};

export default PostAJob;