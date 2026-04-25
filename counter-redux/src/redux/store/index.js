import { combineReducers, createStore } from "redux";
import { cntReducer } from "../reducers/cnt.reducer";
import { listReducer } from "../reducers/list.reducer";
const reducers = combineReducers({
  cnt: cntReducer,
  list: listReducer
})

export const globalState = createStore(reducers);