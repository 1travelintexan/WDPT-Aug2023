import { Divider, Input, Button } from "antd";
import { useState } from "react";

function AddTodoForm({ todos, setTodos, showForm, setShowForm }) {
  const [newTodo, setNewTodo] = useState("");
  const handleCreateTodo = (event) => {
    // first prevent the default behaivor of the form and stop it from refreshing the page
    event.preventDefault();
    console.log("todo created", newTodo);
    //create a new variable of the same shape as the other todos, with an id, title that equals the newTodo state and done as false
    const todoToCreate = {
      id: todos.length + 1,
      title: newTodo,
      done: false,
    };
    //spread all of the other todos and add the new one to the front of the array
    setTodos([todoToCreate, ...todos]);
    //erase the input for the user to have a nice experience
    setNewTodo("");
    //Hide the form after you create the new todo
    setShowForm(false);
    //update the local storage to have the new todo, same as the ones you see on the screen
    localStorage.setItem("todos", JSON.stringify([todoToCreate, ...todos]));
  };
  return (
    <form onSubmit={handleCreateTodo}>
      <Divider>Add New Todo</Divider>
      <label>Title</label>
      <Input
        name="name"
        value={newTodo}
        type="text"
        onChange={(event) => {
          console.log(event.target.value);
          setNewTodo(event.target.value);
        }}
      />
      <button>Create</button>
    </form>
  );
}
export default AddTodoForm;
