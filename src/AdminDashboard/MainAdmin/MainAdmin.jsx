import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./MainAdmin.css";

const MainAdmin = () => {
  // dashboard open and closed switch
  const [dbSwitch, setDbSwitch] = useState(false);
  const dashboardSwitch = { dbSwitch, setDbSwitch };

  return (
    //main admin dashboard section
    <section className="flex">
      {/* admin sidebar */}
      <div
        className={`admin-bg  min-h-screen duration-500 ease-in-out ${
          dbSwitch ? "w-[17%] min-w-[15rem]" : "w-[5rem]"
        }`}
      >
        <Sidebar dashboardSwitch={dashboardSwitch} />
      </div>

      {/* admin component render */}
      <div className="admin-bg min-w-[83%] w-full p-5">
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default MainAdmin;
