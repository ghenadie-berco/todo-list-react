// Bootstrap
import ListGroup from "react-bootstrap/ListGroup";
// Components
import TaskItem from "./components/TaskItem/TaskItem";

function TaskList({ tasks, toggleComplete, editTask, deleteTask }) {
  return (
    <ListGroup>
      {tasks.map((t) => {
        return (
          <ListGroup.Item key={t.id}>
            <TaskItem
              task={t}
              toggleComplete={toggleComplete}
              editTask={editTask}
              deleteTask={deleteTask}
            />
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default TaskList;
