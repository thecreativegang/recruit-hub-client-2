import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>

      <footer className="footer py-10 flex justify-between  bg-white-200 text-info-content">
        <div>
          <span className="footer-title text-xl">Services</span>
          <Link to="/" className="link link-hover">Web Development</Link>
          <Link to="/" className="link link-hover">Design</Link>
          <Link to="/" className="link link-hover">Marketing</Link>
          <Link to="/" className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title text-xl">Company</span>
          <Link to="/" className="link link-hover">About us</Link>
          <Link to="/" className="link link-hover">Contact</Link>
          <Link to="/" className="link link-hover">Jobs</Link>

        </div>
        <div>
          <span className="footer-title text-xl">Links</span>
          <Link to="/" className="link link-hover">Latest News & Blog</Link>
          <Link to="/" className="link link-hover">Popular Services</Link>
          <Link to="/" className="link link-hover">Need a Career?</Link>
        </div>
        <div>
          <span className="text-black text-5xl font-bold">Subscribe Our <br /> Newsletter</span>
          <p>Natus errorsit voluptatem accusa dolore <br /> mque quae abillo inventore verita achitec <br /> beatae vitae dicta sunt explicabo.</p>
          <div className="form-control w-80">

            <div className="relative">
              <input type="text" placeholder="Email Address" className="input input-bordered w-full pr-16" />
              <button className="  btn btn-primary text-white absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Footer;