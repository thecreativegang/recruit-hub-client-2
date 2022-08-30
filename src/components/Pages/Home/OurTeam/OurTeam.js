import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, EffectCoverflow } from 'swiper';
import { Navigation } from "swiper";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";
import './Ourteam.css'



const OurTeam = () => {
    const teamData = [
        {
            "id": 2,
            "image": " https://swiperjs.com/demos/images/nature-1.jpg",

            "name": "Sumon Bala",
            "role": "Front End Developer"

        }, {
            "id": 3,
            "image": " https://swiperjs.com/demos/images/nature-3jpg",


            "name": "Sourav Biswas",
            "role": "Backend Engineer"

        }, {
            "id": 4,
            "image": " https://swiperjs.com/demos/images/nature-4.jpg",

            "name": "Jahid Hasan",
            "role": "Full Stack Developer"

        }, {
            "id": 5,
            "image": " https://swiperjs.com/demos/images/nature-5.jpg",


            "name": "Tanvir Ahmed",
            "role": "Team Lead"

        }, {
            "id": 6,
            "image": " https://swiperjs.com/demos/images/nature-2.jpg",


            "name": "Atiquer Rahman",
            "role": "Node Js Developer"

        }
    ]
    return (
        <div className='slider-container py-16 bg-[#f3f3f3] dark:bg-[#0b1120]'>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                navigation={true}
                centeredSlides={true}
                modules={[EffectCoverflow, Pagination, Navigation]}

                slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
                pagination={{
                    clickable: true
                }}
                className="mySwiper"
            >


                {/* <div className='bg-white p-2'>

                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                        <div>
                            <h1>Sumon Bala</h1>
                            <h1>Front End</h1>
                        </div>
                    </div> */}

                {
                    teamData.map(team => <SwiperSlide key={team.id}>
                        <div className='bg-white h-full'>
                            <img src={team?.image} />
                            <div className=''>
                                <h1>{team?.name}</h1>
                                <h1>{team?.role}</h1>
                            </div>
                        </div>

                    </SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default OurTeam;