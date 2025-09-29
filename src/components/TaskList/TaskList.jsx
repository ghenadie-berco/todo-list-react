// Bootstrap
import ListGroup from "react-bootstrap/ListGroup";
// Components
import TaskItem from "./components/TaskItem/TaskItem"
// Styles
import "./TaskList.css";

function TaskList({ tasks, toggleComplete }) {
  return (
    <ListGroup>
      {tasks.map((t) => {
        return (
          <ListGroup.Item key={t.id}>
            <TaskItem task={t} toggleComplete={toggleComplete} />
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default TaskList;
