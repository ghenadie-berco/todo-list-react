// Bootstrap
import ListGroup from "react-bootstrap/ListGroup";
// Dnd KIt
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
// Components
import TaskItem from "./components/TaskItem/TaskItem";

function TaskList({
  tasks,
  toggleComplete,
  editTask,
  deleteTask,
  tasksRearrange,
}) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 100, // User must press and hold for this amount of miliseconds
        tolerance: 5, // User can move their finger 5px before the delay is canceled
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <ListGroup>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          {tasks.map((t) => {
            return (
              <SortableItem key={t.id} id={t.id}>
                <ListGroup.Item>
                  <TaskItem
                    task={t}
                    toggleComplete={toggleComplete}
                    editTask={editTask}
                    deleteTask={deleteTask}
                  />
                </ListGroup.Item>
              </SortableItem>
            );
          })}
        </SortableContext>
      </DndContext>
    </ListGroup>
  );

  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = tasks.findIndex((t) => t.id === active.id);
      const newIndex = tasks.findIndex((t) => t.id === over.id);
      tasksRearrange(arrayMove(tasks, oldIndex, newIndex));
    }
  }
}

// Component for sorting
function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    touchAction: "none",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {props.children}
    </div>
  );
}

export default TaskList;
