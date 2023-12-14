import { createSlice } from '@reduxjs/toolkit'

const initialState = {
allProducts:'',
categories:'',
prodcutsByCat:''
}

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    getAllProducts(state,action){
      state.allProducts = action.payload.response
    },
    getAllCategories(state,action){
      state.categories = action.payload.response
    },
    getProductsByCategory(state,action){
      state.prodcutsByCat = action.payload.response
    },
  }
});

export const storeActions = storeSlice.actions

export default storeSlice.reducer