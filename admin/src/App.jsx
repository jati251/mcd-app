import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
