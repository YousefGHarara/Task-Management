import "./tasks.css";

import React, { useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import LeftSide from "../../components/LeftSide/leftSide";
import { useTask } from "../../assets/Context/taskContext";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Tasks = () => {
  const { tasks, dispatch, setIsModel } = useTask();
  const task = tasks.taskItem;

  // const [todo, setTodo] = useState([]);
  const [doing, setDoing] = useState([]);

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: "task",
      drop: () => ({ name: "the doing" }),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    []
  );

  const [{isDragging}, drag] = useDrag(() => ({
    type: "task",
    item: {name: task},
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if(item && dropResult) {
        alert("Woww")
        console.log("Dropping");
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }), [],) 

  const updateTask = (task) => {
    dispatch({
      type: "update",
      payload: { id: task.id },
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: "delete",
      payload: { id: id },
    });
  };

  const handleButton = (task, e) => {
    const { name } = e.target;
    dispatch({
      type: "status",
      payload: {
        id: task.id,
        status: name,
        state: !task[name],
      },
    });
  };

  return (
    <div className="tasks">
      <div className="content">
        <div className="todo">
          <h2>Todo</h2>
          <div className="card-list">
            {tasks.taskItem.map((task) => {
              return (
                <div ref={drag} key={task.id} className="card">
                  <div className="card-top">
                    <h3>{task.name}</h3>
                    <p onClick={() => deleteTask(task.id)}>-</p>
                  </div>
                  <p className="card-description">{task.description}</p>
                  <div className="card-bottom">
                    <button
                      onClick={(e) => handleButton(task, e)}
                      name="complete"
                      className={`btn-complete ${
                        task.complete ? "finish" : ""
                      }`}
                    >
                      {task.complete ? "Not Complete" : "Complete"}
                    </button>
                    <button
                      onClick={(e) => handleButton(task, e)}
                      name="finish"
                      className={`btn-finish ${task.finish ? "finish" : ""}`}
                    >
                      {task.finish ? "Not Finish" : "Finish"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="doing">
          <h2>Doing</h2>
          <div ref={drop} className="drag-content">

          </div>
        </div>
        <div className="done">
          <h2>Done</h2>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
