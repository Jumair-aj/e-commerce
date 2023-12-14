import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import storeSliceReducer from "./storeSlice";


const rootReducer = combineReducers({
  store: storeSliceReducer,
  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,
 });

export default store;  