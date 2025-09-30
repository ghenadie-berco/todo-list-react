import { createStore } from "redux";

export function addNewTasks(task) {
  return {
    type: "ADD_NEW_TASk",
    data: task,
  };
}

function tasksReducer(state = { tasks: [] }, action) {
  switch (action.type) {
    case "ADD_NEW_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    default:
      return state;
  }
}

const store = createStore(tasksReducer);
store.subscribe((store) => console.log(store.getState()));
export default store;
