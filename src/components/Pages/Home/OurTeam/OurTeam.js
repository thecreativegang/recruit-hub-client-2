import React from 'react'


const OurTeam = () => {
  return (
    <div className='my-20 '>
      <div className='text-center'>
        <h1 className='text-xl text-primary my-10'>Meet Our Team</h1>
        <h1 className='text-5xl font-bold'>Experience Team Members</h1>
        <h2 className='my-10 text-2xl text-gray-400'>Professional Recruit Agency to provide solutions</h2>
      </div>
      {/* experience team members  */}
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 justify-center justify-items-center gap-5'>

        <div className="card w-full bg-base-100 shadow-xl mt-10">
          <figure className="px-10 pt-10">
            <img src=
              'https://i.ibb.co/FsSQmy2/img1.png' alt="Shoes" className="rounded-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Douglas J. Bleau</h2>
            <p>UX/UI Designer</p>

          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl mt-10">
          <figure className="px-10 pt-10">
            <img src=
              'https://i.ibb.co/jg5dMN6/img2.jpg' alt="Shoes" className="rounded-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Thomas M. Wilso</h2>
            <p>Web Developer</p>

          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl mt-10">
          <figure className="px-10 pt-10">
            <img src=
              'https://i.ibb.co/mNgyQvZ/img3.jpg' alt="Shoes" className="rounded-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Robert J. Ryan</h2>
            <p>SEO Marketing</p>

          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl mt-10">
          <figure className="px-10 pt-10">
            <img src=
              'https://i.ibb.co/Lx5mJ5s/img4.jpg' alt="Shoes" className="rounded-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Kenneth K. Joiner</h2>
            <p>Backend Expert</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default OurTeam;