// Bootstrap
import Form from "react-bootstrap/Form";
import { Trash3 } from "react-bootstrap-icons";
// Styles
import "./TaskItem.css";

function TaskItem({ task, toggleComplete, deleteTask }) {
  
  const onToggleComplete = () => {
    toggleComplete(task);
  };

  const onDeleteTask = () => {
    deleteTask(task);
  };

  return (
    <div className="task-item">
      <Form.Check
        id="completed-checkbox-control"
        className="check-control"
        checked={task.completed}
        onChange={onToggleComplete}
      />
      <span className={task.completed ? 'text-strike-through' : ''}>{task.name}</span>
      <Trash3 className="delete-icon" onClick={onDeleteTask} />
    </div>
  );
}

export default TaskItem;
