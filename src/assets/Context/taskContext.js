import React, { createContext, useContext, useReducer, useState } from "react";

const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [isModel, setIsModel] = useState(false);

  const initailValue = {
    taskItem: [],
  };

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "add": {
        return {
          ...state,
          taskItem: [...state.taskItem, action.payload],
        };
      }
      case "update": {
        const newData = state.taskItem.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              ...action.payload,
            };
          }
          return task;
        });

        return {
          ...state,
          taskItem: newData,
        };
      }
      case "delete" : {
        const filteredData = state.taskItem.filter((task) => {
          return task.id !== action.payload.id
        })
        return {
          ...state,
          taskItem: filteredData
        }
      }
      case "status" : {
        const newData = state.taskItem.map((task) => {
          if(task.id === action.payload.id) {
            return {
              ...task,
              [action.payload.status]: action.payload.state
            }
          }
          return task
        })
        console.log(state);
        return {
          ...state,
          taskItem: newData
        }
      }
      default:
        return state;
    }
  };

  const [tasks, dispatch] = useReducer(taskReducer, initailValue);

  const countTasks = () => {
    let count = 0;
    tasks.taskItem.forEach((_) => {
      count += 1;
      console.log("Hii");
    });
    return count;
  };

  const countComplete = () => {
    let count = 0;
    tasks.taskItem.forEach(task => {
      if(task.complete) {
        count += 1;
      }
    })
    return count;
  }

  const countFinish = () => {
    let count = 0;
    tasks.taskItem.forEach(task => {
      if(task.finish) {
        count += 1;
      }
    })
    return count;
  }

  const value = { countComplete, countFinish, countTasks, tasks, dispatch, isModel, setIsModel };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTask = () => {
  return useContext(TaskContext);
};

export default TaskContextProvider;
