import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./MainAdmin.css";

const MainAdmin = () => {
  return (
    //main admin dashboard section
    <section className="grid grid-cols-12">
      {/* admin sidebar */}
      <div className="bg-slate-100 col-span-2 min-h-screen">
        <Sidebar />
      </div>

      {/* admin component render */}
      <div className="bg-slate-300 col-span-10 p-5"></div>
    </section>
  );
};

export default MainAdmin;
