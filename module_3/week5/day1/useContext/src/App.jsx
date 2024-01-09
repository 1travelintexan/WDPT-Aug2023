import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UserContext } from "./contexts/UserContext";
import { TaskContext } from "./contexts/TaskContext";

function App() {
  const [count, setCount] = useState(0);

  //this is how all components receive the contexts
  const { user } = useContext(UserContext);
  const { tasks } = useContext(TaskContext);
  console.log("here");
  const handleUpdate = () => {};
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{user}</h1>
      {/* one example of waiting on data to arrive */}
      {/* {tasks.length &&
        tasks.map((oneTask, i) => {
          return <h3 key={i}>{oneTask}</h3>;
        })} */}

      {tasks.length ? (
        tasks.length &&
        tasks.map((oneTask, i) => {
          return <h3 key={i}>{oneTask}</h3>;
        })
      ) : (
        <p>Loading.... </p>
      )}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <form onSubmit={handleUpdate}>
          <input />
          <button>submit</button>
        </form>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
