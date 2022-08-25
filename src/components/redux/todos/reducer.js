import {
  ADD_TODO,
  CLEAR_COMPLETED,
  COLOR_TODO,
  All_COMPLETED_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "./actionTypes";
import { initState } from "./initialState";

const nextTodoId = (todos) => {
  const maxId = todos.reduce((max, todo) => Math.max(max, todo.id), -1);
  return maxId + 1;
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: nextTodoId(state),
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      );
    case COLOR_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, color: action.color } : todo,
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case All_COMPLETED_TODO:
      return state.map((todo) => ({ ...todo, completed: true }));
    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};
