import React from 'react'


const OurTeam = () => {
    return (
        <div className='my-20'>
           <div className='text-center'>
           <h1 className='text-5xl'>Experience Team Members</h1>
            <h2 className='my-10 text-2xl'>Professional Recruit Agency to provide solutions</h2>
           </div>

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

            <div>
            <div class="hero min-h-screen bg-base-100">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/17y5Fxd/contact-1.jpg" class="max-w-sm rounded-full shadow-2xl" />
    <div>
      <h1 class="text-7xl font-bold">Have Any on Project Mind! Contact Us</h1>
      <p class="py-6">Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudan tium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem</p>

      <h3>Email Us</h3>
      <p>support@gmail.com</p>

      <input type="text" placeholder="Full Name" class="input input-bordered w-full max-w-xs mx-5" />
      <input type="text" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
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