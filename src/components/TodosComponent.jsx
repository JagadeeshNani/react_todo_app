import { useEffect, useState } from "react";
import DisplayList from "./DisplayList";

const TodosComponent = () => {
  const todoContainer = {
    width: "40%",
    margin: "10px auto",
    fontFamily: "sans-serif",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fffcf5",
    boxShadow: "10px 10px 10px 5px lightblue",
    borderRadius: "10px",
  };
  const todoInterfaceObject = {
    id: 0,
    title: "",
    status: false,
  };

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(todoInterfaceObject);
  const [length, setLength] = useState(0);

  useEffect(() => {
    let todoLength = todos.length;
    setLength(todoLength);
  }, [todos]);

  const handleOnChange = (event) => {
    let todosObj = {};
    todosObj.id = length + 1;
    todosObj.title = event.target.value;
    todosObj.status = false;
    setNewTodo(todosObj);
  };

  const handleOnclick = () => {
    console.log(newTodo, todos);
    setTodos((oldTodo) => [...oldTodo, newTodo]);
    setNewTodo(todoInterfaceObject);
  };

  const handleCheckbocChange = (item) => {
    setTodos(
      todos?.map((todo) => {
        return item.id === todo.id ? { ...item, status: !todo.status } : todo;
      })
    );
  };

  const handleDelete = (item) => {
    setTodos(todos?.filter((todo) => item.id !== todo.id));
    console.log(todos);
  };
  return (
    <div style={todoContainer}>
      <h1
        style={{
          width: "100%",
          textAlign: "center",
          padding: "10px",
          color: "blue",
        }}
      >
        THINGS TO DO
      </h1>
      <div
        style={{
          padding: "0.1rem",
          display: "inline-block",
          width: "100%",
        }}
      >
        <input
          type="text"
          placeholder="Add New"
          onChange={handleOnChange}
          value={newTodo.title || todoInterfaceObject.title}
          style={{
            width: "80%",
            height: "50px",
            margin: "10px",
            padding: "10px",
            borderRadius: "10px",
            fontWeight: 700,
            fontSize: "25px",
            borderColor: "blue",
            backgroundColor: "#fffcf5",
            boxShadow: "10px 10px 5px 5px lightblue",
          }}
        />
        <button
          type="button"
          onClick={handleOnclick}
          style={{
            width: "13%",
            height: "50px",
            margin: "10px",
            padding: "10px",
            borderRadius: "10px",
            color: "blue",
            fontSize: "20px",
            fontWeight: 700,
            backgroundColor: "#fffcf5",
            borderColor: "blue",
            boxShadow: "10px 10px 5px lightblue",
          }}
        >
          Add
        </button>
      </div>
      <div
        style={{
          width: "95%",
          maxHeight: "80vh",
          overflow: "auto",
        }}
      >
        {length ? (
          todos?.map((todo, index) => (
            <DisplayList
              key={index}
              todo={todo}
              onChange={handleCheckbocChange}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <h2
            style={{
              margin: "30px auto",
              textAlign: "center",
              fontSize: "50px",
              color: "#f2e6c9",
            }}
          >
            No Tasks...
          </h2>
        )}
      </div>
    </div>
  );
};

export default TodosComponent;
