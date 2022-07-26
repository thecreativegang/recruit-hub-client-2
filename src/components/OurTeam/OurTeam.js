import React from 'react'


const OurTeam = () => {
    return (
        <div className='my-20'>
           <div className='text-center'>
            <h1 className='text-xl text-primary my-10'>Meet Our Team</h1>
           <h1 className='text-5xl font-bold'>Experience Team Members</h1>
            <h2 className='my-10 text-2xl text-gray-400'>Professional Recruit Agency to provide solutions</h2>
           </div>
        {/* experience team members  */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-4'>

            <div class="card w-80 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src=
    'https://i.ibb.co/FsSQmy2/img1.png' alt="Shoes" class="rounded-full" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Douglas J. Bleau</h2>
    <p>UX/UI Designer</p>

  </div>
</div>
            <div class="card w-80 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src=
    'https://i.ibb.co/jg5dMN6/img2.jpg' alt="Shoes" class="rounded-full" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Thomas M. Wilso</h2>
    <p>Web Developer</p>

  </div>
</div>
            <div class="card w-80 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src=
    'https://i.ibb.co/mNgyQvZ/img3.jpg' alt="Shoes" class="rounded-full" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Robert J. Ryan</h2>
    <p>SEO Marketing</p>

  </div>
</div>
            <div class="card w-80 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src=
    'https://i.ibb.co/Lx5mJ5s/img4.jpg' alt="Shoes" class="rounded-full" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Kenneth K. Joiner</h2>
    <p>Backend Expert</p>
  </div>
</div>
            </div>

            {/* Contact us section */}
            <div>
            <div class="hero min-h-screen bg-base-100 my-20">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/17y5Fxd/contact-1.jpg" class="max-w-sm rounded-full shadow-2xl" />
    <div>
      <h1 class="text-7xl font-bold">Have Any on <span className='text-slate-400'>Project</span>  Mind! <span className='text-slate-400'>Contact</span>  Us</h1>
      <p class="py-6">Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudan tium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem</p>

        {/* email and phone for contact */}
      <div className='grid grid-cols-2 mx-4 my-10'>
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
      <input type="text" placeholder="Full Name" class="input input-bordered w-full max-w-xs mx-5" />
      <input type="text" placeholder="Email Address" class="input input-bordered w-full max-w-xs mx-5" />
      <br />
      <textarea class="textarea textarea-bordered w-full max-w-2xl mx-5 my-5" placeholder="Write message"></textarea>
      <br />
      <button class="btn btn-primary mx-5">Send Us Message</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default OurTeam;