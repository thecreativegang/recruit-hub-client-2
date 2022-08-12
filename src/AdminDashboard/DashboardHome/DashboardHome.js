import React from 'react';
import { LineChart, BarChart, Bar, Cell, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import chart from '../../images/line-chart.png'
import barChart from '../../images/bar-chart.png'
const DashboardHome = () => {

    const data = [
        {
            name: 'Page A',
            interview: 4000,
            hired: 2400,
            amt: 2400,
            month: 'jan'
        },
        {
            name: 'Page B',
            interview: 3000,
            hired: 1398,
            amt: 2210,
            month: 'feb'

        },
        {
            name: 'Page C',
            interview: 2000,
            hired: 9800,
            amt: 2290,
            month: 'mar'

        },
        {
            name: 'Page D',
            interview: 2780,
            hired: 3908,
            amt: 2000,
            month: 'apr'

        },
        {
            name: 'Page E',
            interview: 1890,
            hired: 4800,
            amt: 2181,
            month: 'may'

        },
        {
            name: 'Page F',
            interview: 2390,
            hired: 3800,
            amt: 2500,
            month: 'june'

        },
        {
            name: 'Page G',
            interview: 3490,
            hired: 4300,
            amt: 2100,
            month: 'july'

        },
    ];
    return (
        <div>

            {/* wellcome  */}

            <div className='flex justify-between '>
                <div className='w-[30%]'>
                    <h1 className='admin-heading-color'>Hi Welcome ! </h1>
                    <h1 className='admin-heading-color text-[1.25rem]'>Our Dashboard ,</h1>
                </div>
                <div className='admin-border-right'>
                    <span className='admin-normal-color'>Balance</span>
                    <h1 className='admin-heading-color text-[1.25rem]'>$40079.60 M</h1>
                </div>
                <div className='admin-border-right'>
                    <span className='admin-normal-color'>Today’s profit</span>
                    <h1 className='admin-heading-color text-[1.25rem]'>$175.00 M</h1>
                </div>
                <div className='admin-border-right'>
                    <span className='admin-normal-color'>Purchases</span>
                    <h1 className='admin-heading-color text-[1.25rem]'>406</h1>
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
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 mt-8'>
                <div className='admin-card-bg admin-shadow py-[1.25rem] px-[1.437rem]'>
                    <h1 className='text-[#b1b1b5] font-semibold'>Meeting And Hired</h1>
                    <p className='admin-normal-color my-4'>The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>

                    <div>
                        <div className='flex justify-between'>
                            <div className=''>
                                <span className='admin-normal-color'>Order Value</span>
                                <h1 className='admin-heading-color text-[1.875rem]'>14k</h1>
                            </div>
                            <div className=''>
                                <span className='admin-normal-color'>Orders</span>
                                <h1 className='admin-heading-color text-[1.875rem]'>457</h1>
                            </div>
                            <div className=''>
                                <span className='admin-normal-color'>Users</span>
                                <h1 className='admin-heading-color text-[1.875rem]'>40689</h1>
                            </div>
                            <div className=''>
                                <span className='admin-normal-color'>Downloads</span>
                                <h1 className='admin-heading-color text-[1.875rem]'>1004</h1>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8'>

                        <LineChart height={338} data={data} className='w-full'>
                            <Line type="monotone" dataKey="hired" stroke="#8884d8" strokeWidth={2} />
                            <XAxis dataKey="name" />
                            <YAxis />
                        </LineChart>
                        <img src={chart} alt="" />

                    </div>
                </div>
                <div className='admin-card-bg admin-shadow py-[1.25rem] px-[1.437rem]'>
                    <h1 className='text-[#b1b1b5] font-semibold'>Meeting Reports</h1>
                    <p className='admin-normal-color my-4'>The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                    <div className='mt-8 w-[100%] h-[20rem]'>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="hired" stackId="a" fill="#FF4747" />
                                <Bar dataKey="interview" stackId="a" fill="#258AFC" />
                            </BarChart>
                        </ResponsiveContainer>

                        {/* <img src={barChart} alt="" /> */}

                    </div>
                </div>

            </div>

            {/* todo */}

            <div className='grid gap-8 grid-cols-1 md:grid-cols-5 mt-8'>
                <div className='admin-card-bg admin-shadow py-[1.25rem] px-[1.437rem] col-span-3'>
                    <h1 className='admin-heading-color'>Hiring Status</h1>
                    <table className='w-full  admin-normal-color '>
                        <thead>
                            <tr>
                                <th className='flex'>Name</th>
                                <th>Salary</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='admin-bg'>
                                <td>Node Js Developer</td>
                                <td>$3783</td>
                                <td>22 july 2022</td>
                                <td class="font-weight-medium text-success">Completed</td>
                            </tr>
                            <tr>
                                <td>React js Developer</td>
                                <td>$678</td>
                                <td>7 january 2022</td>
                                <td class="font-weight-medium text-warning">Pending</td>
                            </tr>
                            <tr className='admin-bg'>
                                <td>Full-Stack Developer</td>
                                <td>$879</td>
                                <td>30 february 2022</td>
                                <td class="font-weight-medium text-success">Completed</td>
                            </tr>

                            <tr >
                                <td>Front-end Developer</td>
                                <td>$1123</td>
                                <td>22 july 2022</td>
                                <td class="font-weight-medium text-[#ff4747]">Cancelled</td>
                            </tr>
                            <tr className='admin-bg'>
                                <td>Software Engineer</td>
                                <td>$6867</td>
                                <td>22 july 2022</td>
                                <td class="font-weight-medium text-success">Completed</td>
                            </tr>
                            <tr >
                                <td>Backend Developer</td>
                                <td>$3783</td>
                                <td>7 april 2022</td>
                                <td class="font-weight-medium text-warning">Pending</td>
                            </tr>
                            <tr className='admin-bg'>
                                <td>Node Js Developer</td>
                                <td>$6767</td>
                                <td>2 june 2022</td>
                                <td class="font-weight-medium text-[#ff4747]">Cancelled</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='admin-card-bg admin-shadow py-[1.25rem] px-[1.437rem] col-span-2 admin-normal-color'>
                    <h1 className='admin-heading-color mb-4'>To Do list</h1>

                    <ul>
                        <li className='py-[1.063rem] px-[1.4rem] todo-border flex justify-between mb-[0.812rem]'><span>Level up for Antony</span> <i class="fa-solid fa-xmark text-[1rem] text-[#248afd]"></i>
                        </li>
                        <li className='py-[1.063rem] px-[1.4rem] todo-border flex justify-between mb-[0.812rem]' ><span>Meeting with john doe</span> <i class="fa-solid fa-xmark text-[1rem] text-[#248afd]"></i>
                        </li>
                        <li className='py-[1.063rem] px-[1.4rem] todo-border flex justify-between mb-[0.812rem]' ><span>Project meeting with CEO</span> <i class="fa-solid fa-xmark text-[1rem] text-[#248afd]"></i>
                        </li>
                        <li className='py-[1.063rem] px-[1.4rem] todo-border flex justify-between mb-[0.812rem]' ><span>Metting with lead lead</span> <i class="fa-solid fa-xmark text-[1rem] text-[#248afd]"></i>
                        </li>
                        <li className='py-[1.063rem] px-[1.4rem] todo-border flex justify-between mb-[0.812rem]' ><span>Level up for Antony</span> <i class="fa-solid fa-xmark text-[1rem] text-[#248afd]"></i>
                        </li>

                    </ul>

                    <div>
                        <input placeholder='Add new task' type="text" name="" id="" />
                        <i class="fa-solid fa-paper-plane text-[#248afd] text-[2.25rem]"></i>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashboardHome;