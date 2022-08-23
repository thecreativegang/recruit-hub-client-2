import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const SocialProfile = () => {
    return (
        <div>
            <div className="my-10" id='social-profile'>
                <div className="w-full md:w-[732px] mx-4 md:mx-auto ">
                    <h2 className=" text-2xl md:text-4xl text-[#788894]">
                        Resume & Social Profile
                    </h2>
                </div>

                <div className="w-full md:w-[732px] p-6 rounded-lg mt-4 mx-auto bg-white">
                    <div className="w-full flex items-center justify-between pb-4">
                        <div className="w-full">
                            <div className="flex justify-end">
                                <button className="btn text-xs md:text-xl font-semibold text-right flex items-center">
                                    {' '}
                                    <AiOutlineCloudUpload className="mr-1 text-xl" /> UPLOAD
                                    RESUME
                                </button>
                            </div>

                            {/* Social link  */}
                            <div className="py-4">
                                <div className="py-2 border-y-2 border-gray-200">
                                    <p className="text-base text-[#2C9BF5] font-[500]">
                                        https://www.linkedin.com/in/tanvirahmed6174/
                                    </p>
                                </div>

                                <div className="py-2 border-b-2 border-gray-200">
                                    <p className="text-base text-[#2C9BF5] font-[500]">
                                        https://github.com/tanvirgithub21
                                    </p>
                                </div>

                                <div className="py-2 border-b-2 border-gray-200">
                                    <p className="text-base text-[#2C9BF5] font-[500]">
                                        http://localhost:3000/profile
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialProfile;