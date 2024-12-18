import "./leftSide.css";

import anime from "../../assets/imgs/anime3.jpeg";
import React from "react";
import { NavLink } from "react-router-dom";

const LeftSide = () => {
  return (
    <div className="left-side">
      <div className="logo">
        <img src={anime} alt="" />
        <p>Yousef Harara</p>
      </div>
      <hr />
      <ul className="list">
        <li>
          <NavLink to={"/"}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to={"/tasks"}>Tasks</NavLink>
        </li>
        <li>
          <NavLink to={"/setting"}>Setting</NavLink>
        </li>
        <li>
          <NavLink to={"/logout"}>Logout</NavLink>
        </li>
      </ul>
      
    </div>
  );
};

export default LeftSide;
