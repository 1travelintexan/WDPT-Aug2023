import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  const studentArr = [
    { name: "Doreen", pet: "fish" },
    { name: "Dinah", pet: "fish" },
    { name: "Abdul", pet: "dog" },
  ];
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button onClick={handleClick}>Count: {count}</button>
      {studentArr.map((oneStudent) => {
        return <Profile user={oneStudent} />;
      })}
    </>
  );
}

export default App;
