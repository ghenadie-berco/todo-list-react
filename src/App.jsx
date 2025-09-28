// React
import { useEffect, useState } from "react";
// DnD Kit
import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
// Components
import TaskList from "./components/TaskList/TaskList";
import AddTaskControl from "./components/AddTaskControl/AddTaskControl";
// Styles
import "./App.css";

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

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setTasks((currentTasks) => {
        const oldIndex = currentTasks.findIndex(
          (task) => task.id === active.id
        );
        const newIndex = currentTasks.findIndex((task) => task.id === over.id);
        return arrayMove(currentTasks, oldIndex, newIndex);
      });
    }
  };

  const onAddTask = (task) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), name: task, completed: false },
    ]);
  };

  const onEditTask = (taskId, newName) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, name: newName } : task
      )
    );
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
        <AddTaskControl addTask={onAddTask} />
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          {tasks.length > 0 && (
            <TaskList
              tasks={tasks}
              toggleCompleted={onToggleCompleted}
              editTask={onEditTask}
              deleteTask={onDeleteTask}
            />
          )}
        </DndContext>
      </section>
    </main>
  );
}

export default App;
