// React
import { useRef, useState } from "react";
// Bootstrap
import Form from "react-bootstrap/Form";
import { PlusLg } from "react-bootstrap-icons";
// Styles
import "./AddTaskControl.css";

function AddTaskControl({ addNewTask }) {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const handleAddTask = () => {
    if (name.length === 0) {
      return;
    }
    addNewTask({ name });
    // Clear current name
    setName("");
    // Clear input
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    handleAddTask();
  };

  return (
    <div className="d-flex flex-row align-items-center gap-2 rounded-2 overflow-hidden add-task-control-container">
      <Form.Control
        ref={inputRef}
        id="add-task-control"
        type="text"
        className="border-0 p-0 shadow-none"
        placeholder="Add new task..."
        onKeyDown={(e) => handleKeyDown(e)}
        onChange={(e) => setName(e.target.value)}
      />
      <PlusLg className="plus-icon" onClick={handleAddTask} />
    </div>
  );
}

export default AddTaskControl;
