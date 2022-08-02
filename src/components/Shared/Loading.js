import React from 'react';

const Loading = ({ imgWidth }) => {
    return (
        <div className='h-[100vh] flex justify-center items-center '>
            <div>
                <div style={{ borderTopColor: 'transparent' }}
                    class="w-16 h-16 border-8 border-blue-400 border-solid rounded-full animate-spin"></div>
            </div>
        </div >
    );
};

export default Loading;