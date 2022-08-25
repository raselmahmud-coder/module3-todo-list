import { combineReducers } from "redux";
import { reducer } from "./todos/reducer";
import { reducer as filtersReducer } from "./filters/reducer";

const rootReducer = combineReducers({
    todo: reducer,
    filter: filtersReducer,
});
export default rootReducer;