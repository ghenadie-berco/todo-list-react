import * as Icon from "react-bootstrap-icons";
import { ListGroup, Button } from "react-bootstrap";
import "./TaskItem.css";

function TaskItem({ task, toggleCompleted, deleteTask }) {
  return (
    <ListGroup.Item className="task-item">
      <span
        className={`check-icon ${task.completed ? "completed" : ""}`}
        onClick={() => toggleCompleted(task, !task.completed)}
      >
        {task.completed && <Icon.CheckLg></Icon.CheckLg>}
      </span>
      <span
        className={`ms-3 task-text ${
          task.completed ? "text-decoration-line-through text-muted" : ""
        }`}
      >
        {task.name}
      </span>
      <Icon.Trash3
        className="delete-icon"
        onClick={() => deleteTask(task)}
      ></Icon.Trash3>
    </ListGroup.Item>
  );
}

export default TaskItem;
