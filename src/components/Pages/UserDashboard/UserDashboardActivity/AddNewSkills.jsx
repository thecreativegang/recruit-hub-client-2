import React from "react";

const AddNewSkills = () => {
  return (
    <div className="w-full mb-3 ">
      <label
        for="skills"
        class="block mb-2 text-base font-medium text-gray-900 ml-1"
      >
        Skills
      </label>
      <input
        type="text"
        id="skills"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Added your Skills"
        required
      />
    </div>
  );
};

export default AddNewSkills;
