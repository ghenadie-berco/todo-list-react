// React
import { useState, useRef } from "react";
// Bootrap
import { PlusLg } from "react-bootstrap-icons";
// Styles
import "./AddTaskControl.css";

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

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onAddTask();
    }
  };

  return (
    <div className="add-task-container">
      <input
        ref={inputRef}
        type="text"
        className="add-task-input"
        placeholder="Add new task..."
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="add-task-button" onClick={onAddTask}>
        <PlusLg></PlusLg>
      </button>
    </div>
  );
}

export default AddTaskControl;
