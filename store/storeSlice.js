import { createSlice } from '@reduxjs/toolkit'

const initialState = {
allProducts:'',
categories:'',
prodcutsByCat:'',
cart:'',
cartItems:'',
product:''
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
    addToCart(state,action){
      state.cart = action.payload.response
    },
    viewCart(state,action){
      state.cartItems = action.payload.response
    },
    getSingleProduct(state,action){
      state.product = action.payload.response
    },
  }
});

export const storeActions = storeSlice.actions

export default storeSlice.reducer