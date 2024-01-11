import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserContextWrapper } from "./contexts/UserContext.jsx";
import { TaskContextWrapper } from "./contexts/TaskContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <TaskContextWrapper>
        <UserContextWrapper>
          <App />
        </UserContextWrapper>
      </TaskContextWrapper>
    </Router>
  </React.StrictMode>
);
