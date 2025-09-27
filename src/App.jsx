import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import AddTaskControl from "./components/AddTaskControl/AddTaskControl";
import { useEffect, useState } from "react";

const STORAGE_KEY = "todo-tasks";

function getTasks() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function App() {
  const [tasks, setTasks] = useState(getTasks());

  const onAddTask = (task) => {
    setTasks([
      ...tasks,
      { id: new Date().getMilliseconds(), name: task, completed: false },
    ]);
  };

  const onToggleCompleted = (task, completed) => {
    setTasks(
      tasks.map((t) => (t.id === task.id ? { ...t, completed: completed } : t))
    );
  };

  const onDeleteTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  return (
    <main>
      <h1>Today's Tasks</h1>
      <section>
        <TaskList
          tasks={tasks}
          toggleCompleted={onToggleCompleted}
          deleteTask={onDeleteTask}
        />
        <AddTaskControl addTask={onAddTask} />
      </section>
    </main>
  );
}

export default App;
