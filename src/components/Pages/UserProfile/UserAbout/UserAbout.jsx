import React from "react";

//react icons link
import { AiFillHome } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="">
      {/* Basic info  */}
      <h3 className="user-title">Basic Information</h3>
      <div className="inline-block p-5">
        <p className=" capitalize text-lg text-gray-500 font-medium mb-3 flex justify-start items-center cursor-pointer">
          <AiFillHome className="mr-3" />
          Live In
          <span className="font-semibold text-gray-800"> Barisal</span>
        </p>
        <p className=" capitalize text-lg text-gray-500 font-medium mb-3 flex justify-start items-center cursor-pointer">
          <MdLocationOn className="mr-3" />
          Form <span className="font-semibold text-gray-800"> Bangladesh</span>
        </p>
        <p className=" text-lg text-gray-500 font-medium mb-3 flex justify-start items-center hover:text-blue-600 duration-100 ease-in-out cursor-pointer">
          <FaEnvelope className="mr-3" />
          tanvir.bd.global@gmail.com
        </p>
        <p className=" capitalize text-lg text-gray-500 font-medium mb-3 flex justify-start items-center cursor-pointer">
          <FaPhoneAlt className="mr-3" />
          +880 1797021366
        </p>
        <p className=" capitalize text-lg text-gray-500 font-medium mb-3 flex justify-start items-center hover:text-blue-600 duration-100 ease-in-out cursor-pointer">
          <FaGithub className="mr-3" />
          github
        </p>
        <p className=" capitalize text-lg text-gray-500 font-medium mb-3 flex justify-start items-center hover:text-blue-600 duration-100 ease-in-out cursor-pointer">
          <FaLinkedinIn className="mr-3" />
          linkdin
        </p>
        <p className=" capitalize text-lg text-gray-500 font-medium mb-3 flex justify-start items-center hover:text-blue-600 duration-100 ease-in-out cursor-pointer">
          <FaFacebook className="mr-3" />
          facebook
        </p>
        <p className=" capitalize text-lg text-gray-500 font-medium mb-3 flex justify-start items-center hover:text-blue-600 duration-100 ease-in-out cursor-pointer">
          <FaInstagram className="mr-3" />
          insatgram
        </p>
      </div>
    </section>
  );
};

export default About;
