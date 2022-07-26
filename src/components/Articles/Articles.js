import React from 'react';


const Articles = () => {
    return (
        <div>
           <div className='text-center'>
           <h1 className=' text-5xl'>Latest News & Blogs</h1>
            <p className='my-10 text-2xl'>Professional Recruit Agency to provide solutions</p>
           </div>

        <div className='grid sm:grid-cols-1 lg:grid-cols-3'>
        <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
  <div class="card-actions justify-start">
      <button class="btn btn-primary">Click Now</button>
    </div>
    <h2 class="card-title">Everything You Want To Know About</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure qui facere labore soluta dolorum veniam minima minus suscipit autem inventore.</p>
    
    <a class="link link-primary">Read More </a>
  </div>
</div>
        <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
  <div class="card-actions justify-start">
      <button class="btn btn-primary">Click Now</button>
    </div>
    <h2 class="card-title">Everything You Want To Know About</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure qui facere labore soluta dolorum veniam minima minus suscipit autem inventore.</p>
    
    <a class="link link-primary">Read More </a>
  </div>
</div>
        <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
  <div class="card-actions justify-start">
      <button class="btn btn-primary">Click Now</button>
    </div>
    <h2 class="card-title">Everything You Want To Know About</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure qui facere labore soluta dolorum veniam minima minus suscipit autem inventore.</p>
    
    <a class="link link-primary">Read More </a>
  </div>
</div>
        </div>
        <div className='grid justify-items-center my-10'>
            <button class="btn btn-primary">View More News</button>
        </div>
        
        </div>
    );
};

export default Articles;