import React from "react";
import "./module.FreeResource.css";
import { AiOutlineSearch } from "react-icons/ai";
import ReactPlayer from "react-player";
import GetThumbnail from "../../../hooks/GetThumbnail";

const FreeResource = () => {
  // get YouTube Video Thumbnail function Start
  const youtubImg = GetThumbnail("https://www.youtube.com/watch?v=lNsmaXFmnSI");
  // get YouTube Video Thumbnail function End

  return (
    <div>
      {/* hero section  */}
      <section className="background-img">
        <div className="overlay w-full h-full bg-[#0000009e]">
          <div className="container h-[30rem]">
            {/* hero section title  */}
            <h2 className=" text-5xl font-[600] text-[#ffffffe2] text-center pt-16 pb-4 open-sans">
              Practice makes a man Perfect
            </h2>
            <h2 className=" text-5xl font-[600] text-[#ffffffe2] text-center pb-16 pt-4 open-sans">
              Keep Learning and Keep Exploring
            </h2>

            {/* search bar  */}
            <div className="flex justify-center">
              <div className="flex items-center justify-center px-2 rounded-md w-[28rem] bg-[#ffffff]">
                <input
                  type="text"
                  className=" w-full px-3 py-2 bg-transparent border-none outline-none text-xl font-[400] text-gray-700 tracking-wide"
                  placeholder="Search..."
                />
                <AiOutlineSearch className="text-4xl text-gray-800 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* vedio section  */}
      <section>
        <div className="container">
          <h2 className="text-center text-gray-700 open-sans font-[600] text-4xl capitalize py-10">
            programming most complicated topic video
          </h2>

          {/* filer button */}
          <div className="flex justify-center items-center mb-8">
            <button className="text-base px-3 py-1 rounded-xl bg-sky-600 text-white font-[500] hover:bg-sky-500 duration-300 ease-in-out">
              Popular videos
            </button>
            <button className="text-base px-3 py-1 rounded-xl bg-sky-600 text-white font-[500] hover:bg-sky-500 duration-300 ease-in-out mx-6">
              Newest videos
            </button>
            <button className="text-base px-3 py-1 rounded-xl bg-sky-600 text-white font-[500] hover:bg-sky-500 duration-300 ease-in-out">
              Saved video
            </button>
          </div>

          {/* video render hear  */}
          <div className="w-[70%] h-[500px] border-4 border-gray-600 rounded-sm mx-auto my-16">
            <ReactPlayer
              width="100%"
              height="100%"
              controls
              url="https://youtu.be/7sDY4m8KNLc"
            />
          </div>

          {/* video list  */}
          <div className="grid grid-cols-4 justify-center items-center gap-10 pt-10 mb-20 mx-3">
            <div className=" w-full h-full rounded overflow-hidden shadow-xl">
              <div className=" w-full h-auto rounded overflow-hidden">
                <img className="w-full h-full" src={youtubImg} alt="you" />
              </div>
              <h3 className="text-gray-800 text-base font-medium mt-2 mb-4 mx-2">
                Lorem ipsum dolor sit amet consec
              </h3>
            </div>

            <div className=" w-full h-full rounded overflow-hidden shadow-xl">
              <div className=" w-full h-auto rounded overflow-hidden">
                <img className="w-full h-full" src={youtubImg} alt="you" />
              </div>
              <h3 className="text-gray-800 text-base font-medium mt-2 mb-4 mx-2">
                Lorem ipsum dolor sit amet consec
              </h3>
            </div>

            <div className=" w-full h-full rounded overflow-hidden shadow-xl">
              <div className=" w-full h-auto rounded overflow-hidden">
                <img className="w-full h-full" src={youtubImg} alt="you" />
              </div>
              <h3 className="text-gray-800 text-base font-medium mt-2 mb-4 mx-2">
                Lorem ipsum dolor sit amet consec
              </h3>
            </div>

            <div className=" w-full h-full rounded overflow-hidden shadow-xl">
              <div className=" w-full h-auto rounded overflow-hidden">
                <img className="w-full h-full" src={youtubImg} alt="you" />
              </div>
              <h3 className="text-gray-800 text-base font-medium mt-2 mb-4 mx-2">
                Lorem ipsum dolor sit amet consec
              </h3>
            </div>

            <div className=" w-full h-full rounded overflow-hidden shadow-xl">
              <div className=" w-full h-auto rounded overflow-hidden">
                <img className="w-full h-full" src={youtubImg} alt="you" />
              </div>
              <h3 className="text-gray-800 text-base font-medium mt-2 mb-4 mx-2">
                Lorem ipsum dolor sit amet consec
              </h3>
            </div>

            <div className=" w-full h-full rounded overflow-hidden shadow-xl">
              <div className=" w-full h-auto rounded overflow-hidden">
                <img className="w-full h-full" src={youtubImg} alt="you" />
              </div>
              <h3 className="text-gray-800 text-base font-medium mt-2 mb-4 mx-2">
                Lorem ipsum dolor sit amet consec
              </h3>
            </div>

            <div className=" w-full h-full rounded overflow-hidden shadow-xl">
              <div className=" w-full h-auto rounded overflow-hidden">
                <img className="w-full h-full" src={youtubImg} alt="you" />
              </div>
              <h3 className="text-gray-800 text-base font-medium mt-2 mb-4 mx-2">
                Lorem ipsum dolor sit amet consec
              </h3>
            </div>

            <div className=" w-full h-full rounded overflow-hidden shadow-xl">
              <div className=" w-full h-auto rounded overflow-hidden">
                <img className="w-full h-full" src={youtubImg} alt="you" />
              </div>
              <h3 className="text-gray-800 text-base font-medium mt-2 mb-4 mx-2">
                Lorem ipsum dolor sit amet consec
              </h3>
            </div>

            <div className=" w-full h-full rounded overflow-hidden shadow-xl">
              <div className=" w-full h-auto rounded overflow-hidden">
                <img className="w-full h-full" src={youtubImg} alt="you" />
              </div>
              <h3 className="text-gray-800 text-base font-medium mt-2 mb-4 mx-2">
                Lorem ipsum dolor sit amet consec
              </h3>
            </div>

            <div className=" w-full h-full rounded overflow-hidden shadow-xl">
              <div className=" w-full h-auto rounded overflow-hidden">
                <img className="w-full h-full" src={youtubImg} alt="you" />
              </div>
              <h3 className="text-gray-800 text-base font-medium mt-2 mb-4 mx-2">
                Lorem ipsum dolor sit amet consec
              </h3>
            </div>

            <div className=" w-full h-full rounded overflow-hidden shadow-xl">
              <div className=" w-full h-auto rounded overflow-hidden">
                <img className="w-full h-full" src={youtubImg} alt="you" />
              </div>
              <h3 className="text-gray-800 text-base font-medium mt-2 mb-4 mx-2">
                Lorem ipsum dolor sit amet consec
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeResource;
