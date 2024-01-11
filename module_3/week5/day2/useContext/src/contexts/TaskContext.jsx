import { createContext, useEffect, useState } from "react";

const TaskContext = createContext();

const TaskContextWrapper = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setTasks(["test1", "test2", "test3"]);
    }, 3000);
  }, []);
  return (
    <TaskContext.Provider value={{ tasks: tasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskContextWrapper };
