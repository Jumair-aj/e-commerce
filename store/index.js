import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import storeSliceReducer from "./storeSlice";
import userSliceReducer from "./userSlice";
import cartSlice from "./cartSlice";



const rootReducer = combineReducers({
  store: storeSliceReducer,
  user: userSliceReducer,
  cart: cartSlice,
  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,
 });

export default store;  