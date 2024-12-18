import { useTask } from "../../assets/Context/taskContext";
import "./addNew.css";

import React, { useEffect, useRef, useState } from "react";

const AddNew = () => {
  const { isModel, setIsModel, dispatch } = useTask();
  const [input, setInput] = useState({
    projectName: "",
    projectDescription: "",
  });
  const wrapperRef = useRef();

  const closeModel = (e) => {
    if (e.target === wrapperRef.current) {
      console.log("Helo");
      setInput({
        projectName: "",
        projectDescription: "",
      });
      setIsModel(false);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onSubmit = () => {
    dispatch({
      type: "add",
      payload: {
        id: new Date().getTime(),
        name: input.projectName,
        description: input.projectDescription,
        complete: false,
        finish: false
      },
    });
    setInput({
      projectName: "",
      projectDescription: "",
    });
    setIsModel(false)
  };

  return (
    <>
      {isModel ? (
        <div ref={wrapperRef} onClick={closeModel} className="wrapper">
          <div className="model">
            <div className="model-top">
              <label htmlFor="task-name">Project Name</label>
              <p onClick={() => setIsModel(false)}>x</p>
            </div>
            <input
              onChange={handleInput}
              value={input.projectName}
              type="text"
              name="projectName"
            />
            <label htmlFor="task-description">Project Description</label>
            <textarea
              onChange={handleInput}
              value={input.projectDescription}
              name="projectDescription"
              rows={6}
              id=""
            ></textarea>
            <button onClick={onSubmit}>Submit</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AddNew;
