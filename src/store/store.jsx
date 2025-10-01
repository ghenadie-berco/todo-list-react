// Redux
import { configureStore } from "@reduxjs/toolkit";
// Actions
import {
  ADD_TASK,
  EDIT_TASK,
  TOGGLE_COMPLETE_TASK,
  DELETE_TASK,
} from "./actionTypes.jsx";
// Constants
import { STORAGE_KEY } from "../App.jsx";

function getTasks() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

const initialState = {
  tasks: getTasks(),
};

export function addNewTask(task) {
  return {
    type: ADD_TASK,
    task: task,
  };
}

export function editTask(task) {
  return {
    type: EDIT_TASK,
    task: task,
  };
}

export function deleteTask(task) {
  return {
    type: DELETE_TASK,
    task: task,
  };
}

export function toggleCompleteTask(task) {
  return {
    type: TOGGLE_COMPLETE_TASK,
    task: task,
  };
}

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((t) => {
          if (t.id === action.task.id) {
            return {
              ...t,
              ...action.task,
            };
          } else {
            return t;
          }
        }),
      };
    case TOGGLE_COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((t) => {
          if (t.id === action.task.id) {
            return {
              ...t,
              completed: !t.completed,
            };
          } else {
            return t;
          }
        }),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.task.id),
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: tasksReducer,
});
export default store;
