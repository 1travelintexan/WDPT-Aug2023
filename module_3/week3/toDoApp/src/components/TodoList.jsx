import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
//Todo list is a component that receives two props, all the todos and the setter to change them
function TodoList({ todos, setTodos }) {
  //handle done maps over the todos and changes the one you clicked from done to not done or vice versa
  const handleDone = (todoId) => {
    const mappedTodos = todos.map((elem) => {
      if (elem.id === todoId) {
        elem.done = !elem.done;
      }
      return elem;
    });
    setTodos(mappedTodos);
  };
  //handle delete removes the todo from the list by using filter
  const handleDelete = (id) => {
    const filteredTodos = todos.filter((curr) => {
      if (curr.id !== id) {
        return true;
      }
    });
    setTodos(filteredTodos);
  };

  return (
    <>
      {todos.map((oneTodo) => {
        return (
          <div key={oneTodo.id} className="todo-row">
            <Button
              onClick={() => {
                handleDone(oneTodo.id);
              }}
            >
              Done
            </Button>
            <h4 className={oneTodo.done ? "done" : null}>{oneTodo.title}</h4>
            {oneTodo.done && (
              <FontAwesomeIcon
                icon={faSquareCheck}
                style={{ height: "30px" }}
              />
            )}
            {/* <Button
              onClick={() => {
                handleDelete(oneTodo.id);
              }}
            >
              Delete
            </Button> */}
            <Button
              type="primary"
              onClick={() => {
                handleDelete(oneTodo.id);
              }}
              danger
              ghost
            >
              Delete
            </Button>
          </div>
        );
      })}
    </>
  );
}
export default TodoList;
