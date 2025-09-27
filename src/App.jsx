import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import AddTaskControl from "./components/AddTaskControl/AddTaskControl";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { name: 'Shopping', completed: false },
    { name: 'Laundry', completed: false },
    { name: 'Interview Prep', completed: false },
  ]);

  const onAddTask = (task) => {
    setTasks([...tasks, { name: task, completed: false }]);
  };

  const onToggleCompleted = (task, completed) => {
    setTasks(tasks.map((t) => (t === task ? { ...t, completed: completed } : t)));
  };

  const onDeleteTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

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
