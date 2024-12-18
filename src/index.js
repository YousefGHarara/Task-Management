import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./index.css";
import TaskContextProvider from "./assets/Context/taskContext";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TaskContextProvider>
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </TaskContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
