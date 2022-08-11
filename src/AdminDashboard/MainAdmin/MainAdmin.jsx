import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./MainAdmin.css";

const MainAdmin = () => {
  return (
    //main admin dashboard section
    <section className="grid grid-cols-12 admin-bg">
      {/* admin sidebar */}
      <div className=" col-span-2 min-h-screen">
        <Sidebar />
      </div>

      {/* admin component render */}
      <div className=" col-span-10 p-5">
        <h1>dashboard</h1>
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default MainAdmin;
