import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/dashboard";
import Tasks from "./pages/Tasks/tasks";
import Setting from "./pages/Setting/setting";
import Navbar from "./components/Navbar/navbar";
import LeftSide from "./components/LeftSide/leftSide";
import AddNew from "./components/AddNew/addNew";

const App = () => {

  const print = () => ({name: "yousef", age: 20})

  console.log("Hello From App, ", print());

  return (
    <div className="area">
      <Navbar />
      <LeftSide />
      <div className="content-area">
        <AddNew />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/*" element={<h1>Oopse !! 🥹🥹</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

// npm error code EINVALIDPACKAGENAME
// npm error Invalid package name "react- " of package "react- @^18.3.1": name cannot contain leading or trailing spaces; name can only contain URL-friendly characters.
// npm error A complete log of this run can be found in: C:\Users\msi2021\AppData\Local\npm-cache\_logs\2024-10-24T15_42_27_408Z-debug-0.log
