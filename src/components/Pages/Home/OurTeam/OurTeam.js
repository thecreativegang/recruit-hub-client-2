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

      {/* Contact us section */}
      <div>
        <div className="hero min-h-screen bg-base-100 my-20">
          <div className="hero-content w-full flex-col lg:flex-row-reverse">
            <img src="https://i.ibb.co/17y5Fxd/contact-1.jpg" className="max-w-sm w-full rounded-full shadow-2xl" alt='' />
            <div>
              <h1 className="md:text-7xl text-3xl font-bold">Have Any on <span className='text-slate-400'>Project</span>  Mind! <span className='text-slate-400'>Contact</span>  Us</h1>
              <p className="py-6">Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudan tium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem</p>

              {/* email and phone for contact */}
              <div className='grid grid-cols-1 gap-y-10 md:grid-cols-2 mx-4 my-10'>
                <div>
                  <h3 className='text-primary text-xl'>Email Us</h3>
                  <p className='text-2xl font-bold'>support@gmail.com</p>
                </div>

                <div>
                  <h3 className='text-primary text-xl'>Phone Us</h3>
                  <p className='text-2xl font-bold'>+88012 (345) 67 89</p>
                </div>

              </div>
              {/* input fields */}
              <input type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs mb-5 md:mx-2  " />
              <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs  " />
              <br />
              <textarea className="textarea textarea-bordered w-full max-w-2xl   my-5" placeholder="Write message"></textarea>
              <br />
              <button className="  btn btn-primary text-white  ">Send Us Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;