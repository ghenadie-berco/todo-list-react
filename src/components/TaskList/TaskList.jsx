// Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
// Styles
import "./TaskList.css";

function TaskList({ tasks }) {
  return (
    <ListGroup>
      {tasks.map((t) => {
        return <ListGroup.Item>{t.name}</ListGroup.Item>;
      })}
    </ListGroup>
  );
}

export default TaskList;
