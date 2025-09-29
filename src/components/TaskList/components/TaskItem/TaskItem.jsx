// Styles
import "./TaskItem.css";

function TaskItem({ task, toggleComplete }) {
  const onToggleComplete = () => {
    toggleComplete(task);
  };
  return (
    <div>
      <button onClick={onToggleComplete}>{task.completed ? 'No' : 'Yes'}</button>
      <span>{task.name}</span>
    </div>
  );
}

export default TaskItem;
