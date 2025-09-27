import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { ListGroup, Form } from "react-bootstrap";
import "./TaskItem.css";

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function TaskItem({ task, toggleCompleted, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleSave = () => {
    if (editedName.trim()) {
      editTask(task.id, editedName);
    } else {
      setEditedName(task.name);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <ListGroup.Item ref={setNodeRef} style={style} {...attributes} {...listeners} className="d-flex task-item">
      <span
        className={`check-icon ${task.completed ? "completed" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          toggleCompleted(task, !task.completed);
        }}
      >
        {task.completed && <Icon.CheckLg />}
      </span>

      {isEditing ? (
        <Form.Control
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          onClick={(e) => e.stopPropagation()}
          autoFocus
          className="edit-input"
        />
      ) : (
        <span
          className={`task-name ${
            task.completed ? "text-decoration-line-through text-muted" : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsEditing(true);
          }}
        >
          {task.name}
        </span>
      )}

      <div className="action-icon-container">
        {isEditing ? (
          <Icon.CheckLg
            className="save-icon"
            onClick={(e) => {
              e.stopPropagation();
              handleSave();
            }}
          />
        ) : (
          <Icon.Trash3
            className="delete-icon"
            onClick={(e) => {
              e.stopPropagation();
              deleteTask(task);
            }}
          />
        )}
      </div>
    </ListGroup.Item>
  );
}

export default TaskItem;