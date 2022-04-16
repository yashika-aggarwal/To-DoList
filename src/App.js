import { useState } from "react";
import "./styles.css";
import Task from "./Components/ListItem";
import Input from "./Components/InputArea";

export default function App() {
  const [input, setInput] = useState("");
  const [ToDoList, setToDoList] = useState(["A Item"]);

  function handleInput(event) {
    const item = event.target.value;
    setInput(item);
  }
  function addItem() {
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
      <Input InputItem={input} onAdd={addItem} onInput={handleInput} />
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
