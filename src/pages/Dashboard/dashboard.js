import "./dashboard.css";

import React from "react";
import { useTask } from "../../assets/Context/taskContext";


const Dashboard = () => {
  
  const {countComplete, countFinish, countTasks} = useTask();

  return (
    <div className="dashboard ">
      <div className="content">
        <div style={{"--clr-count" : "#FD0A54"}} className="count-task">
          <h3>Number of Tasks</h3>
          <p>{countTasks()}</p>
        </div>
        <div style={{"--clr-count" : "#FFBC11"}} className="count-complete">
          <h3>Number of Complete</h3>
          <p>{countComplete()}</p>
        </div>
        <div style={{"--clr-count" : "#0DE5AB"}} className="count-finished">
          <h3>Number of Finished</h3>
          <p>{countFinish()}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
