import "./TaskList.css";
import TaskItem from "./components/TaskItem/TaskItem";
import { ListGroup } from "react-bootstrap";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function TaskList({ tasks, toggleCompleted, editTask, deleteTask }) {
  return (
    <ListGroup className="list">
      <SortableContext
        items={tasks.map((task) => task.id)}
        strategy={verticalListSortingStrategy}
      >
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleCompleted={toggleCompleted}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))}
      </SortableContext>
    </ListGroup>
  );
}

export default TaskList;
