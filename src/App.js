import { useState } from "react";
import "./styles.css";
import Task from "./Components/ListItem";

export default function App() {
  const [input, setInput] = useState("");
  const [ToDoList, setToDoList] = useState(["A Item"]);

  function handleChange(event) {
    const item = event.target.value;
    setInput(item);
  }
  function handleClick() {
    setToDoList((preItems) => [input, ...preItems]);
    setInput("");
  }
  function deleteItem(id) {
    setToDoList((preItems) => preItems.filter((item, index) => index !== id));
  }

  return (
    <div className="App">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} name="item" value={input} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {ToDoList.map((task, index) => (
            <Task key={index} id={index} task={task} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}
