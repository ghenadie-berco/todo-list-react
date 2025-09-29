// React
import { useState } from "react";
// Components
import AddTaskControl from "./components/AddTaskControl/AddTaskControl";
import TaskList from "./components/TaskList/TaskList";
// Styles
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

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
    setTasks(tasks.filter(t => t.id !== task.id));
  }

  return (
    <main>
      <h1>Today's Tasks</h1>
      <section>
        <AddTaskControl addNewTask={onAddNewTask} />
        <TaskList tasks={tasks} toggleComplete={onToggleComplete} deleteTask={onDeleteTask} />
      </section>
    </main>
  );
};

export default App;
