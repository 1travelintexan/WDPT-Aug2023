import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button } from "antd";
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  //state to hold all the todos, they are empty when the page loads and after two seconds in
  //the useEffect they are set to the three objects
  const [todos, setTodos] = useState([]);
  //show form state is just true or false, if true we show the form to create a new todo. False we hide it
  const [showForm, setShowForm] = useState(false);
  // local storage has methods, mainly setItem and getItem and this is one way to hold information through refreshes
  localStorage.setItem("todos", JSON.stringify(todos));
  //use effect to wait to set the state to have todos inside, like waiting for the db
  useEffect(() => {
    setTimeout(() => {
      setTodos([
        {
          id: "1",
          title: "Walk with Ragnar",
          done: false,
        },
        {
          id: "2",
          title: "Go to Work",
          done: true,
        },
        {
          id: "3",
          title: "Brush my Teeth",
          done: false,
        },
      ]);
    }, 2000);
  }, []);

  //while we are waiting for two seconds, you can show a spinner or just a loading tag to help the user know everything is ok
  if (todos.length === 0) {
    return (
      <>
        <Spinner animation="border" variant="light" />
      </>
    );
  }
  return (
    <div className="page">
      <h1>To-Do List</h1>
      {/* Ternary to say, if the showform state is true (?) show the form else (:) show the button to toggle  */}
      {showForm ? (
        <>
          <AddTodoForm
            todos={todos}
            setTodos={setTodos}
            showForm={showForm}
            setShowForm={setShowForm}
          />
          <Button
            type="primary"
            onClick={() => setShowForm(!showForm)}
            primary
            ghost
          >
            Show Form
          </Button>
        </>
      ) : (
        <Button
          type="primary"
          onClick={() => setShowForm(!showForm)}
          primary
          ghost
        >
          Show Form
        </Button>
      )}
      {/* todo list that accepts the array of todos and the method to change that array as props */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
