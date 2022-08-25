import { COLOR_CHANGED, STATUS_CHANGED } from "./actionTypes";
import initState from "./initState";

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case STATUS_CHANGED:
      return { ...state, status: action.status };
    case COLOR_CHANGED:
      const { color, changeType } = action;
      switch (changeType) {
        case "add":
          return { ...state, colors: [...state.colors, color] };
        case "remove":
          return { ...state, colors: state.colors.filter((c) => c !== color) };
        default:
          return state;
      }

    default:
      return state;
  }
};
