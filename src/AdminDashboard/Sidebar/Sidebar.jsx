import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <button>ON OFF button</button>
      <ul className="">
        <li className="my-1 bg-slate-200 p-3 flex items-center text-lg font-semibold ">
          <Link to="/admin">
            <AiOutlineHome />
            Dashboard
          </Link>
        </li>
        <li className="my-1 bg-slate-200 p-3 flex items-center text-lg font-semibold ">
          <Link to="/admin/alluser">
            <AiOutlineHome />
            All User
          </Link>
        </li>
        <li className="my-1 bg-slate-200 p-3 flex items-center text-lg font-semibold ">
          <AiOutlineHome /> Dashboard
        </li>
        <li className="my-1 bg-slate-200 p-3 flex items-center text-lg font-semibold ">
          <AiOutlineHome /> Dashboard
        </li>
        <li className="my-1 bg-slate-200 p-3 flex items-center text-lg font-semibold ">
          <AiOutlineHome /> Dashboard
        </li>
        <li className="my-1 bg-slate-200 p-3 flex items-center text-lg font-semibold ">
          <AiOutlineHome /> Dashboard
        </li>
        <li className="my-1 bg-slate-200 p-3 flex items-center text-lg font-semibold ">
          <AiOutlineHome /> Dashboard
        </li>
        <li className="my-1 bg-slate-200 p-3 flex items-center text-lg font-semibold ">
          <AiOutlineHome /> Dashboard
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
