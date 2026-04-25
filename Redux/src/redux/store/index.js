import { createStore } from "redux";
import { cartReducer } from "../reducres/cart.reducer";

export const globalStore = createStore(cartReducer)