import React from 'react';


const Articles = () => {
  return (
    <div>
      <div>
        <div className='text-center'>
          <h1 className='text-xl text-primary my-10'>Articles News</h1>
          <h1 className=' text-5xl'>Latest News & Blogs</h1>
          <p className='my-10 text-2xl text-gray-400'>Professional Recruit Agency to provide solutions</p>
        </div>

        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-y-10 justify-items-center'>
          {/* card-1 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="card-actions justify-start">
                <button className="  btn btn-primary text-white">Click Now</button>
              </div>
              <h2 className="card-title">Everything You Want To Know About</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure qui facere labore soluta dolorum veniam minima minus suscipit autem inventore.</p>

              <a className="link link-primary">Read More </a>
            </div>
          </div>


          {/* card-2 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="card-actions justify-start">
                <button className="  btn btn-primary text-white">Click Now</button>
              </div>
              <h2 className="card-title">Everything You Want To Know About</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure qui facere labore soluta dolorum veniam minima minus suscipit autem inventore.</p>

              <a className="link link-primary">Read More </a>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="card-actions justify-start">
                <button className="  btn btn-primary text-white">Click Now</button>
              </div>
              <h2 className="card-title">Everything You Want To Know About</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure qui facere labore soluta dolorum veniam minima minus suscipit autem inventore.</p>

              <a className="link link-primary">Read More </a>
            </div>
          </div>
        </div>
        <div className='grid justify-items-center my-10'>
          <button className="  btn btn-primary text-white">View More News</button>
        </div>
      </div>

    </div>
  );
};

export default Articles;