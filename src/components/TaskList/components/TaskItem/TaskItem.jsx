// Bootstrap
import Form from "react-bootstrap/Form";
// Styles
import "./TaskItem.css";

function TaskItem({ task, toggleComplete }) {
  const onToggleComplete = () => {
    toggleComplete(task);
  };
  return (
    <div className="task-item">
      <Form.Check
        id="completed-checkbox-control"
        checked={task.completed}
        onChange={onToggleComplete}
      />
      <span>{task.name}</span>
    </div>
  );
}

export default TaskItem;
