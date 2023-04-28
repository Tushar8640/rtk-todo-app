import React, { useState } from "react";
import SidebarNav from "../components/Sidebar";
import Header from "../components/Header";
import Todo from "../components/Todo";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow(!show);
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className=" max-w-6xl h-[700px]  bg-white p-2  border-[3px] border-gray-600/[.4] rounded-3xl">
        <Header />

        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <SidebarNav />
          </div>
          <div className="col-span-10 mx-5">
            <Todo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
