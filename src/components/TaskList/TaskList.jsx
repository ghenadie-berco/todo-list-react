import "./TaskList.css"
import TaskItem from './components/TaskItem';
import { ListGroup } from 'react-bootstrap';

function TaskList({ tasks, toggleCompleted, deleteTask }) {
  return (
    <ListGroup className='list'>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleCompleted={toggleCompleted}
          deleteTask={deleteTask}
        />
      ))}
    </ListGroup>
  );
}

export default TaskList;
