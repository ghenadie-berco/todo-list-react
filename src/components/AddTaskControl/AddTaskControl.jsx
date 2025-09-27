import "./AddTaskControl.css";
import { PlusLg } from "react-bootstrap-icons";
import { useState, useRef } from "react";

function AddTaskControl({ addTask }) {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const onAddTask = () => {
    if (name.length) {
      addTask(name);
      setName("");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div class="add-task-container">
      <input
        ref={inputRef}
        type="text"
        class="add-task-input"
        placeholder="Add new task..."
        onChange={(e) => setName(e.target.value)}
      />
      <button class="add-task-button" onClick={onAddTask}>
        <PlusLg></PlusLg>
      </button>
    </div>
  );
}

export default AddTaskControl;
