// Bootstrap
import Form from "react-bootstrap/Form";
import { Trash3, CheckLg } from "react-bootstrap-icons";
// Styles
import "./TaskItem.css";
import { useEffect, useState } from "react";

function TaskItem({ task, toggleComplete, editTask, deleteTask }) {

  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState("");

  const onToggleComplete = () => {
    toggleComplete(task);
  };

  const enableTaskNameEditing = () => {
    setIsEditing(true);
  };

  const handleEditKeyDown = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    setIsEditing(false);
    updateTaskName();
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

  useEffect(() => {
    setTaskName(task.name);
  }, []);

  return (
    <div className="task-item">
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
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onKeyDown={(e) => handleEditKeyDown(e)}
          onBlur={handleOnEditBlur}
          autoFocus
        />
      ) : (
        <div
          className={
            "task-name" + (task.completed ? "text-strike-through" : "")
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
