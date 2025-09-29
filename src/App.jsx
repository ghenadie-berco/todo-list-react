// React
import { useEffect, useState } from "react";
// Components
import AddTaskControl from "./components/AddTaskControl/AddTaskControl";
import TaskList from "./components/TaskList/TaskList";
// Styles
import "./App.css";
// Constants
const STORAGE_KEY = "todo-tasks";

const getTasks = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

const saveTasks = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

const App = () => {
  const [tasks, setTasks] = useState(getTasks());

  const onAddNewTask = ({ name }) => {
    setTasks((current) => [
      ...current,
      {
        id: Date.now(),
        name,
        completed: false,
      },
    ]);
  };

  const onToggleComplete = (task) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      })
    );
  };

  const onDeleteTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  useEffect(() => saveTasks(tasks), [tasks]);

  return (
    <main>
      <h1>Today's Tasks</h1>
      <section>
        <AddTaskControl addNewTask={onAddNewTask} />
        {tasks.length > 0 && (
          <TaskList
            tasks={tasks}
            toggleComplete={onToggleComplete}
            deleteTask={onDeleteTask}
          />
        )}
      </section>
    </main>
  );
};

export default App;
