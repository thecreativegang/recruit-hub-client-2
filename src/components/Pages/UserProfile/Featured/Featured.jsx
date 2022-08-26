import React from "react";

const Featured = () => {
  return (
    <section>
      {/* section title  */}
      <h2 className="user-title">Featured</h2>

      {/* Section content */}
      <div className="px-5 pb-5">
        {/* featured box  */}
        <div className="md:flex user-card-shadow rounded-lg mb-10">
          {/* featured left  */}
          <div className="md:w-1/2 min-w-[18.7rem]">
            <img
              className="p-5 w-full h-full object-cover object-center rounded-lg overflow-hidden"
              src="https://i.pinimg.com/564x/30/5c/5a/305c5a457807ba421ed67495c93198d3.jpg"
              alt="Featured Images"
            />
          </div>

          {/* featured right  */}
          <div className="md:w-1/2 min-w-[18.7rem] p-5">
            <h3 className="text-xl text-gray-700 font-medium text-left capitalize">
              Programing hero course
            </h3>
            <span className="inline-block text-lg text-gray-600 font-medium text-left mt-2">
              Description
            </span>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              laudantium nihil assumenda hic voluptatem. Quis quaerat, provident
              quo, id consequatur quibusdam minima qui tempora blanditiis,
              commodi deserunt maiores nisi soluta! Nam autem sint accusamus
              temporibus a quas, quae qui unde asperiores quisquam reiciendis
              voluptatem enim animi, suscipit praesentium ad maxime? Sunt
              mollitia itaque beatae, in voluptas inventore distinctio dolorum,
              dolor quo odit repellat porro! Harum, dolores. Repellendus ea
              cupiditate voluptatem perferendis. At deleniti inventore
            </p>
          </div>
        </div>
        {/* featured box  */}
        <div className="md:flex user-card-shadow rounded-lg mb-10">
          {/* featured left  */}
          <div className="md:w-1/2 min-w-[18.7rem]">
            <img
              className="p-5 w-full h-full object-cover object-center rounded-lg overflow-hidden"
              src="https://i.pinimg.com/564x/30/5c/5a/305c5a457807ba421ed67495c93198d3.jpg"
              alt="Featured Images"
            />
          </div>

          {/* featured right  */}
          <div className="md:w-1/2 min-w-[18.7rem] p-5">
            <h3 className="text-xl text-gray-700 font-medium text-left capitalize">
              Programing hero course
            </h3>
            <span className="inline-block text-lg text-gray-600 font-medium text-left mt-2">
              Description
            </span>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              laudantium nihil assumenda hic voluptatem. Quis quaerat, provident
              quo, id consequatur quibusdam minima qui tempora blanditiis,
              commodi deserunt maiores nisi soluta! Nam autem sint accusamus
              temporibus a quas, quae qui unde asperiores quisquam reiciendis
              voluptatem enim animi, suscipit praesentium ad maxime? Sunt
              mollitia itaque beatae, in voluptas inventore distinctio dolorum,
              dolor quo odit repellat porro! Harum, dolores. Repellendus ea
              cupiditate voluptatem perferendis. At deleniti inventore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
