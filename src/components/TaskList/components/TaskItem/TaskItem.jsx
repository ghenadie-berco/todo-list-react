// React
import { useState } from "react";
// Bootstrap
import Form from "react-bootstrap/Form";
import { Trash3, CheckLg } from "react-bootstrap-icons";
// Styles
import "./TaskItem.css";

function TaskItem({ task, toggleComplete, editTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.name);

  const onToggleComplete = () => {
    toggleComplete(task);
  };

  const enableTaskNameEditing = () => {
    setIsEditing(true);
  };

  const handleEditKeyDown = (e) => {
    // Prevent mis-handling of events
    e.stopPropagation();
    if (e.key === "Enter") {
      setIsEditing(false);
      updateTaskName();
    }
  };

  const handleOnEditBlur = () => {
    setIsEditing(false);
    updateTaskName();
  };

  const updateTaskName = () => {
    editTask({ taskId: task.id, name: taskName });
  };

  const onDeleteTask = () => {
    deleteTask(task);
  };

  return (
    <div className="d-flex align-items-center gap-2">
      <Form.Check
        id="completed-checkbox-control"
        className="check-control"
        checked={task.completed}
        onChange={onToggleComplete}
      />
      {isEditing ? (
        <Form.Control
          id="edit-task-control"
          type="text"
          className="p-0 border-0 shadow-none"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onKeyDown={(e) => handleEditKeyDown(e)}
          onBlur={handleOnEditBlur}
          autoFocus
        />
      ) : (
        <div
          className={
            (task.completed ? "text-decoration-line-through" : "") + " w-100"
          }
          onClick={() => enableTaskNameEditing()}
        >
          {task.name}
        </div>
      )}
      {isEditing ? (
        <CheckLg className="action-icon" onClick={updateTaskName} />
      ) : (
        <Trash3 className="action-icon delete-icon" onClick={onDeleteTask} />
      )}
    </div>
  );
}

export default TaskItem;
