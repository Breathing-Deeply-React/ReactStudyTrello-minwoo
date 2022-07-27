import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";

const reducer = combineReducers({
  category: categoryReducer,
});

export default reducer;
