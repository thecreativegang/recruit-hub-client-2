import React from 'react';

const DashboardHome = () => {
    return (
        <div>

            {/* wellcome  */}

            <div className='flex justify-between '>
                <div className='w-[30%]'>
                    <h1 className='admin-heading-color'>Hi Welcome ! </h1>
                    <h1 className='admin-heading-color'>Our Dashboard ,</h1>
                </div>
                <div className='admin-border-right'>
                    <span className='admin-normal-color'>Balance</span>
                    <h1 className='admin-heading-color'>$40079.60 M</h1>
                </div>
                <div className='admin-border-right'>
                    <span className='admin-normal-color'>Today’s profit</span>
                    <h1 className='admin-heading-color'>$175.00 M</h1>
                </div>
                <div className='admin-border-right'>
                    <span className='admin-normal-color'>Purchases</span>
                    <h1 className='admin-heading-color'>406</h1>
                </div>
                <div>
                    <span className='admin-normal-color'>Downloads</span>
                    <h1 className='admin-heading-color'>40079</h1>
                </div>
                <div>
                    <button className='admin-btn-yellow'>Downloades</button>
                </div>
            </div>

            {/* card  */}
            <div className='grid grid-cols-1 gap-8 md:grid-cols-4 mt-8'>
                {/* card 1  */}
                <div className='flex justify-between admin-card-bg admin-shadow py-[1.25rem] px-[1.437rem]'>
                    <div className=''>
                        <h1 className='text-[#b1b1b5] text-[14px]  mb-3 font-semibold' >Number Of Developer</h1>
                        <h1 className='text-[#b1b1b5] text-[1.875rem] admin-heading-font-weight'>30340</h1>
                        <p class=" mt-1 text-warning">2.00%
                            <span class="">
                                <small className='admin-normal-color ml-2'>(30 days)</small></span></p>
                    </div>
                    <div className='flex justify-center items-center'>
                        {/* <i class="fa-solid admin-icon-color fa-calendar "></i> */}
                        <i class="fa-solid admin-icon-color fa-laptop-code text-[1.875rem]"></i>
                    </div>
                </div>

                {/* card 2  */}
                <div className='flex justify-between admin-card-bg admin-shadow py-[1.25rem] px-[1.437rem]'>
                    <div className=''>
                        <h1 className='text-[#b1b1b5] text-[14px]  mb-3 font-semibold' >Number Of Client</h1>
                        <h1 className='text-[#b1b1b5] text-[1.875rem] admin-heading-font-weight'>47003</h1>
                        <p class=" mt-1 text-[#ff4747]">0.22%
                            <span class="">
                                <small className='admin-normal-color ml-2'>(30 days)</small></span></p>
                    </div>
                    <div className='flex justify-center items-center'>
                        {/* <i class="fa-solid admin-icon-color fa-calendar "></i> */}
                        <i class="fa-solid admin-icon-color fa-user-tie text-[1.875rem]"></i>
                    </div>
                </div>

                {/* card 3   */}
                <div className='flex justify-between admin-card-bg admin-shadow py-[1.25rem] px-[1.437rem]'>
                    <div className=''>
                        <h1 className='text-[#b1b1b5] text-[14px]  mb-3 font-semibold' >Today Hires</h1>
                        <h1 className='text-[#b1b1b5] text-[1.875rem] admin-heading-font-weight'>4002</h1>
                        <p class=" mt-1 text-success">10.00%
                            <span class="">
                                <small className='admin-normal-color ml-2'>(30 days)</small></span></p>
                    </div>
                    <div className='flex justify-center items-center'>
                        {/* <i class="fa-solid admin-icon-color fa-calendar "></i> */}
                        <i class="fa-solid admin-icon-color fa-address-book text-[1.875rem]"></i>
                    </div>
                </div>
                {/* card 4  */}
                <div className='flex justify-between admin-card-bg admin-shadow py-[1.25rem] px-[1.437rem]'>
                    <div className=''>
                        <h1 className='text-[#b1b1b5] text-[14px]  mb-3 font-semibold' >Number Of Mettings</h1>
                        <h1 className='text-[#b1b1b5] text-[1.875rem] admin-heading-font-weight'>30340</h1>
                        <p class=" mt-1 text-success">22.00%
                            <span class="">
                                <small className='admin-normal-color ml-2'>(30 days)</small></span></p>
                    </div>
                    <div className='flex justify-center items-center'>
                        {/* <i class="fa-solid admin-icon-color fa-calendar "></i> */}
                        <i class="fa-solid admin-icon-color fa-layer-group text-[1.875rem]"></i>
                    </div>
                </div>
            </div>


            {/* chart  */}


        </div>
    );
};

export default DashboardHome;