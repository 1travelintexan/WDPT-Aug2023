import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

const HogwartsStudents = [
  {
    name: "Harry",
    pureBlood: true,
    patounus: "stag",
  },
  {
    name: "Ron",
    pureBlood: true,
    patounus: "Otter",
  },
  {
    name: "Herminone",
    pureBlood: false,
    patounus: "cat",
  },
];

const randomStudents = [
  {
    name: "Draco",
    pureBlood: true,
    patounus: "Snake",
  },
  {
    name: "Tom",
    pureBlood: true,
    patounus: "Dragon",
  },
  {
    name: "Dumbledore",
    pureBlood: true,
    patounus: "Goat",
  },
];
function App() {
  const [students, setStudents] = useState(HogwartsStudents);

  //function to remove a student
  const handleRemove = (name) => {
    console.log("student removed", name);
    const filteredStudents = students.filter(
      (oneStudent) => oneStudent.name !== name
    );
    setStudents(filteredStudents);
  };

  //handle add random function
  const handleAddRandom = () => {
    const randomIndex = Math.floor(Math.random() * randomStudents.length);
    const randomPerson = randomStudents[randomIndex];
    console.log("added a random person", randomPerson);
    setStudents([randomPerson, ...students]);
  };
  return (
    <>
      <h1>Hogwart's Students</h1>
      <button onClick={handleAddRandom}>Add a Random Student</button>
      {students.map((oneStudent) => {
        return (
          <div key={uuidv4()} className="card">
            <h2>Student: {oneStudent.name}</h2>
            <h2>Pure Blood: {oneStudent.pureBlood ? "✅" : "❌"}</h2>
            <h2>Patrounus: {oneStudent.patounus}</h2>
            <button
              onClick={() => {
                handleRemove(oneStudent.name);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
