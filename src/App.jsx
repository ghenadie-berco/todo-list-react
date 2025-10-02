// React
import { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Action Creators
import {
  addNewTask,
  editTask,
  deleteTask,
  toggleCompleteTask,
  setTasks,
} from "./store/store";
// Components
import AddTaskControl from "./components/AddTaskControl/AddTaskControl";
import TaskList from "./components/TaskList/TaskList";
// Styles
import "./App.css";
// Constants
export const STORAGE_KEY = "todo-tasks";

function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function App() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const onAddTask = ({ name }) => {
    dispatch(
      addNewTask({
        id: Date.now(),
        name,
        completed: false,
      })
    );
  };

  const onToggleComplete = (task) => {
    dispatch(toggleCompleteTask(task));
  };

  const onEditTask = ({ taskId, name }) => {
    dispatch(editTask({ id: taskId, name }));
  };

  const onDeleteTask = (task) => {
    dispatch(deleteTask(task));
  };

  const onTasksRearrange = (tasks) => {
    dispatch(setTasks(tasks));
  };

  useEffect(() => saveTasks(tasks), [tasks]);

  return (
    <main className="h-100 d-flex flex-column justify-content-center align-items-center">
      <h1>Today's Tasks</h1>
      <section className="d-flex flex-column p-2 gap-3 rounded-2">
        <AddTaskControl addNewTask={onAddTask} />
        {tasks.length > 0 && (
          <TaskList
            tasks={tasks}
            toggleComplete={onToggleComplete}
            editTask={onEditTask}
            deleteTask={onDeleteTask}
            tasksRearrange={onTasksRearrange}
          />
        )}
      </section>
    </main>
  );
}

export default App;
